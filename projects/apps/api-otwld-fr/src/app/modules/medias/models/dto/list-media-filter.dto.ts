import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ListMediasFilter {
  @Field(() => String, {nullable: true})
  memberId?: string;
}
