import { eDirection } from '../enums/direction.enum';

export interface iOrderBy<T> {
  field: T;
  direction: keyof typeof eDirection;
}
