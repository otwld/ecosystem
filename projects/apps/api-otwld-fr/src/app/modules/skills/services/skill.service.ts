import {Injectable} from '@nestjs/common';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {Skill, SkillDocument} from '../models/skill.model';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class SkillService extends GetMultipleIds<Skill> {
  constructor(@InjectModel(Skill.name) private readonly skillModel: Model<SkillDocument>,
              private readonly appLogger: AppLogger) {
    super(appLogger, skillModel);
    this.appLogger.setContext(SkillService.name);
  }
}
