import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Project, ProjectDocument} from '../models/project.model';
import {Model} from 'mongoose';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {AppLogger} from '../../../shared/modules/logging/logging.service';

@Injectable()
export class ProjectService extends GetMultipleIds<Project> {
  constructor(@InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>,
              private readonly logger: AppLogger) {
    super(logger, projectModel);
    logger.setContext(ProjectService.name);
  }
}
