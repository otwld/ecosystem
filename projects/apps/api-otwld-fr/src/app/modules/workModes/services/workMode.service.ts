import {Injectable} from '@nestjs/common';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {WorkMode, WorkModeDocument} from '../models/workMode.model';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class WorkModeService extends GetMultipleIds<WorkMode> {
  constructor(@InjectModel(WorkMode.name) private readonly workModeModel: Model<WorkModeDocument>,
              private readonly logger: AppLogger) {
    super(logger, workModeModel);
    this.logger.setContext(WorkModeService.name);
  }
}
