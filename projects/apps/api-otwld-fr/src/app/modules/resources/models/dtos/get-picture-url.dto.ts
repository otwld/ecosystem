import {Field, InputType} from '@nestjs/graphql';
import {ResourceSizes} from '../size.model';

@InputType()
export class GetResourceUrlInputDto {
  @Field(() => ResourceSizes)
  size: ResourceSizes;
}
