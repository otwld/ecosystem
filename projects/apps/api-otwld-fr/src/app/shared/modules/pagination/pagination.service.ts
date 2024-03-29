import { Injectable } from '@nestjs/common';
import { Document, Query } from 'mongoose';
import { EMPTY_PAGE } from './models/empty-page.const';
import { iPaginateOption } from './models/paginate-option.interface';
import { PaginationOption } from './models/input/pagination.input';
import { iPage } from './models/interfaces/page.interface';
import { iOrderBy } from './models/interfaces/order-by.interface';
import { eDirection } from './models/enums/direction.enum';
import { b64tn, ntb64 } from '../../utils/string.utils';
import { iListArgs } from './models/interfaces/list-args.interface';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class PaginationService {
  constructor(private logger: AppLogger) {
    this.logger.setContext(this.constructor.name);
  }

  private static _select(option?: iPaginateOption) {
    if (option?.select && option?.embededKey) {
      return option?.select.map((o) => option?.embededKey + '.' + o);
    } else if (option?.embededKey) {
      return [option?.embededKey];
    }
  }

  // without making a db query, build a paginated result from an already resolved array sent in parameter
  public static emulatePaginationOnArray<T>(p: PaginationOption, array: Array<T>): iPage<T> {
    if (!p.before && !p.after) {
      return EMPTY_PAGE;
    }
    const { limit, skip } = PaginationService._fromPaginationToSkipLimit(p);
    const total = array.length;
    return PaginationService._formatResult(array.slice(skip, limit + skip), skip, limit, total);
  }

  // build query from parameters
  private static _baseQuery<T extends Document, LT = never>(
    query: Query<T[], Document>,
    order: iOrderBy<LT>,
    select?: string[],
    option?: iPaginateOption,
  ) {
    if (option?.disableSort || !order) {
      return query.select(select).toConstructor();
    } else {
      const sort: { [key: string]: 1 | -1 } = {};
      if (option?.embededKey) {
        sort[option.embededKey + '.' + order.field] = order.direction === eDirection.ASC ? 1 : -1;
      } else {
        sort[<string>(<unknown>order.field)] = order.direction === eDirection.ASC ? 1 : -1;
      }
      return query.sort(sort).select(select).toConstructor();
    }
  }

  // translate cursors into skip & limit parameters
  private static _fromPaginationToSkipLimit(p: PaginationOption): { limit: number; skip: number } {
    let skip = 0;
    let limit = 0;
    const start = b64tn(p?.cursor);
    if (!p.after) {
      if (!p.before) {
        throw new Error(' after or before need to be define');
      } else {
        skip = start - p.before;
        limit = p.before;
      }
    } else {
      skip = start ? start + 1 : 0;
      limit = p.after;
    }
    return { skip, limit };
  }

  // build cursor and iPage model
  private static _formatResult<T>(
    array: Array<T>,
    skip: number,
    limit: number,
    total: number,
    embededkey?: string,
  ): iPage<T> {
    const totalCount = total || array.length;
    return {
      totalCount,
      edges: array.map((n, i) => ({
        cursor: ntb64(i + skip),
        node: embededkey ? n[embededkey] : n,
      })),
      pageInfo: {
        startCursor: ntb64(skip),
        endCursor: ntb64(Math.min(skip + limit - 1, totalCount)),
        hasPrevPage: skip > 0,
        hasNextPage: skip + limit < totalCount,
      },
    };
  }

  // paginate any find query from mongo
  public async paginate<T extends Document, LT = never>(
    query: Query<T[], Document>,
    args: iListArgs<LT>,
    option?: iPaginateOption,
  ): Promise<iPage<T>> {
    this.logger.verbose('paginate');
    const select = PaginationService._select(option);
    const baseQuery = PaginationService._baseQuery(query, args.order, select, option);

    const p = args.pagination;
    if (!p.before && !p.after) {
      return EMPTY_PAGE;
    }
    const { limit, skip } = PaginationService._fromPaginationToSkipLimit(p);

    // Count is deprecated but we need it to work with geojson and indexes
    const totalCount = await new baseQuery().count().exec();

    if (totalCount === 0) return EMPTY_PAGE;

    const results = option?.lean
      ? await new baseQuery().lean().skip(skip).limit(limit).exec()
      : await new baseQuery().skip(skip).limit(limit).exec();
    return PaginationService._formatResult(<T[]>results, skip, limit, totalCount, option?.embededKey);
  }
}
