import {Args, Context, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {Project} from '../models/project.model';
import {ProjectService} from '../services/project.service';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {Service} from '../../services/models/service.model';
import * as DataLoader from 'dataloader';
import {UseGuards} from '@nestjs/common';
import {LanguageGuard} from '../../../shared/modules/language/guards/language.guard';
import {Member} from '../../members/models/member.model';
import {format} from 'date-fns';
import {enUS, fr} from 'date-fns/locale';
import {Client} from '../../clients/models/client.model';
import {ListProjectsPage} from '../models/dto/list-projects-output.dto';
import {ListProjectsInput} from '../models/dto/list-projects-input.dto';
import {PaginationProjectsPage} from '../models/dto/pagination-projects-output.dto';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {
  }

  @Query(() => ListProjectsPage)
  @UseGuards(LanguageGuard)
  getProjects(@Args() args: ListProjectsInput) {
    return this.projectService.listProjects(args);
  }

  @Query(() => Project)
  @UseGuards(LanguageGuard)
  getProjectBySlug(@Args('slug') slug: string) {
    return this.projectService.getOneBySlug(slug);
  }

  @Query(() => [Project])
  @UseGuards(LanguageGuard)
  getRelatedProjects(@Args('slug') slug: string) {
    return this.projectService.getRelatedProjects(slug);
  }

  @ResolveField('title', () => String)
  resolveTitle(@Parent() project: Project, @CurrentLanguage() language: HeaderLanguage) {
    return project.title[language];
  }

  @ResolveField('template', () => String)
  resolveTemplate(@Parent() project: Project, @CurrentLanguage() language: HeaderLanguage) {
    return project.templates[language];
  }

  @ResolveField('services', () => [Service])
  resolveServices(@Parent() project: Project, @Context('serviceLoader') loader: DataLoader<string, Service>) {
    return loader.loadMany(project.services || []);
  }

  @ResolveField('members', () => [Member])
  resolveMembers(@Parent() project: Project, @Context('memberLoader') loader: DataLoader<string, Member>) {
    return loader.loadMany(project.members || []);
  }

  @ResolveField('startDateLabel', () => String)
  resolveStartDateLabel(@Parent() project: Project, @CurrentLanguage() language: HeaderLanguage) {
    return format(project.startDate, 'MMM dd, yyyy', {locale: language === HeaderLanguage.EN ? enUS : fr});
  }

  @ResolveField('endDateLabel', () => String, {nullable: true})
  resolveEndDateLabel(@Parent() project: Project, @CurrentLanguage() language: HeaderLanguage) {
    return project.endDate ?
      format(project.endDate, 'MMM dd, yyyy', {locale: language === HeaderLanguage.EN ? enUS : fr}) : null;
  }

  @ResolveField('clients', () => [Client])
  resolveClients(@Parent() project: Project, @Context('clientLoader') loader: DataLoader<string, Client>) {
    return loader.loadMany(project.clients || []);
  }

  @ResolveField('previousProject', () => Project, {nullable: true})
  resolvePreviousProject(@Parent() project: Project) {
    return this.projectService.findProjectsByPosition(project, "BEFORE");
  }

  @ResolveField('nextProject', () => Project, {nullable: true})
  resolveNextProject(@Parent() project: Project) {
    return this.projectService.findProjectsByPosition(project, "AFTER");
  }
}
