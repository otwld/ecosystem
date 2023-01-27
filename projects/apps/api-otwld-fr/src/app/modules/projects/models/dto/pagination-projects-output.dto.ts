import {Project} from '../project.model';
import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class PaginationProjectsPage {
  @Field(() => Project, {nullable: true})
  previous?: Project;

  @Field(() => Project, {nullable: true})
  next?: Project;
}
