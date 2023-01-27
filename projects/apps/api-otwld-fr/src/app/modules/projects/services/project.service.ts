import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Project, ProjectDocument} from '../models/project.model';
import {FilterQuery, Model} from 'mongoose';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {AppLogger} from '../../../shared/modules/logging/logging.service';
import {ListProjectsInput} from '../models/dto/list-projects-input.dto';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';

@Injectable()
export class ProjectService extends GetMultipleIds<Project> {
  constructor(@InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>,
              private readonly logger: AppLogger, private paginationService: PaginationService) {
    super(logger, projectModel);
    logger.setContext(ProjectService.name);
  }

  async listProjects(args: ListProjectsInput) {
    this.logger.verbose('listProjects');
    const query: FilterQuery<Project> = {};

    if (args?.criteria?.memberId) {
      query.members = {$in: [args.criteria.memberId]};
    }

    const result = await this.paginationService.paginate(this.model.find(query), args, {lean: true});
    return result
  }

  getOneBySlug(slug: string) {
    return this.model.findOne({slug}).lean().exec();
  }

  async getRelatedProjects(slug: string) {
    const currentProject = await this.model.findOne({slug}).populate('').lean().exec();
    return this.model.find({
      slug: {$ne: slug},
      services: {$in: currentProject.services},
    });
  }

  async findProjectsByPosition(project: Project, position: 'AFTER' | 'BEFORE') {
    console.log(project);
    const docs =  position === 'AFTER' ?
      await (this.model.findOne({
        startDate: {$gt: project.startDate},
      }).sort({startDate: 1}).limit(1).lean().exec())
      :
      await (this.model.find({
        startDate: {$lt: project.startDate},
      }).sort({startDate: -1}).limit(1).lean().exec());
    return docs?.[0] || null;
  }
}
