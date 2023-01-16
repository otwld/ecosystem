import * as DataLoader from 'dataloader';
import { BasicModel } from '../objects/model/basic.model';
import {GetMultipleIds} from '../objects/services/multiple-id.service';

export const createLoader = (service: GetMultipleIds<BasicModel>) => {
  return new DataLoader<string, BasicModel>((ids: readonly string[]) => {
    return service.getMultipleByIds(<string[]>ids).then((items) => {
      const hash: Record<string, BasicModel> = {};
      items.forEach((p) => (hash[p._id] = p));
      return ids.map((id) => {
        return hash[id];
      });
    });
  });
};
