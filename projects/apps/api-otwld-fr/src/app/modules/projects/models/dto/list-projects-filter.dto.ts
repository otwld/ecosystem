import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ListProjectsFilter {
  @Field(() => String, {nullable: true})
  memberId?: string;
}
