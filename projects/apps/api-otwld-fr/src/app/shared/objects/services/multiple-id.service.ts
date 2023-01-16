import { AppLogger } from '../../modules/logging/logging.service';
import { Model } from 'mongoose';
import { Document } from 'mongoose';

export class GetMultipleIds<T> {
  constructor(protected loader: AppLogger, protected model: Model<T & Document>) {}

  getMultipleByIds(ids: string[]): Promise<T[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.model
      .find({ _id: { $in: ids } })
      .lean()
      .exec();
  }
}
