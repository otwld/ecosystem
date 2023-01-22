import {Context, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Project} from '../models/project.model';
import {ProjectService} from '../services/project.service';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {Service} from '../../services/models/service.model';
import * as DataLoader from 'dataloader';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {
  }

  @ResolveField('title', () => String)
  resolveTitle(@Parent() project: Project, @CurrentLanguage() language: HeaderLanguage) {
    return project.title[language];
  }

  @ResolveField('services', () => [Service])
  resolveServices(@Parent() project: Project, @Context('serviceLoader') loader: DataLoader<string, Service>) {
    return loader.loadMany(project.services || []);
  }
}
