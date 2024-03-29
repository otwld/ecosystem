import { Document, FilterQuery, Model } from 'mongoose';
import {AppLogger} from '@ecosystem/nest-shared';

export class GetMultipleIds<T> {
  constructor(
    protected loader: AppLogger,
    protected model: Model<T & Document>
  ) {}

  getMultipleByIds(ids: string[]): Promise<T[]> {
    return this.model
      .find({ _id: { $in: ids } })
      .lean()
      .exec() as unknown as Promise<T[]>;
  }

  getOneByFilter(filter: FilterQuery<T & Document>) {
    return this.model.findOne(filter).lean().exec();
  }
}
