import { b64zero } from '../../../utils/string.utils';
import { iPage } from './interfaces/page.interface';

export const EMPTY_PAGE: iPage<never> = {
  totalCount: 0,
  edges: [],
  pageInfo: {
    startCursor: b64zero,
    endCursor: b64zero,
    hasPrevPage: false,
    hasNextPage: false,
  },
};
