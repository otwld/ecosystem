import {ArgsType, Field, InputType, registerEnumType} from '@nestjs/graphql';
import {ListArgsFactory} from '../../../../shared/modules/pagination/models/list-args-factory.function';
import {ListMediasFilter} from './list-media-filter.dto';

enum eListMediasInputSortFields {
  createdAt = 'createdAt',
}

registerEnumType(eListMediasInputSortFields, {
  name: 'eListMediasInputSortFields',
});

@ArgsType()
@InputType()
export class ListMediasInput extends ListArgsFactory(() => eListMediasInputSortFields, 'Medias') {
  @Field(() => ListMediasFilter, {nullable: true})
  criteria: ListMediasFilter;
}
