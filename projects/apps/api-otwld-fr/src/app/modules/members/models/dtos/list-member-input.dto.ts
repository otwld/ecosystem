import {ArgsType, registerEnumType} from '@nestjs/graphql';
import {ListArgsFactory} from '../../../../shared/modules/pagination/models/list-args-factory.function';

enum eListMembersInputSortFields {
  firstName = 'firstName',
}

registerEnumType(eListMembersInputSortFields, {
  name: 'eListMembersInputSortFields',
});

@ArgsType()
export class ListMemberInput extends ListArgsFactory(() => eListMembersInputSortFields, 'Member') {
}
