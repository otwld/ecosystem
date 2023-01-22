import {ArgsType, Field, InputType, registerEnumType} from '@nestjs/graphql';
import {ListArgsFactory} from '../../../../shared/modules/pagination/models/list-args-factory.function';
import {ListProjectsFilter} from './list-projects-filter.dto';

enum eListProjectsInputSortFields {
  createdAt = 'createdAt',
}

registerEnumType(eListProjectsInputSortFields, {
  name: 'eListProjectsInputSortFields',
});

@ArgsType()
@InputType()
export class ListProjectsInput extends ListArgsFactory(() => eListProjectsInputSortFields, 'Events') {
  @Field(() => ListProjectsFilter, {nullable: true})
  criteria: ListProjectsFilter;
}
