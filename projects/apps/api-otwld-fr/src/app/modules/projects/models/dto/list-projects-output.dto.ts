import {ObjectType} from '@nestjs/graphql';
import {Page} from '../../../../shared/modules/pagination/models/output/page.type';
import {Project} from '../project.model';

@ObjectType({ isAbstract: true })
export class ListProjectsPage extends Page(Project, 'ProjectPage') {}
