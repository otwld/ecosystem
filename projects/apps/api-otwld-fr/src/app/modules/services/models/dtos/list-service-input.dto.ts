import {ArgsType, registerEnumType} from '@nestjs/graphql';
import {ListArgsFactory} from '../../../../shared/modules/pagination/models/list-args-factory.function';

enum eListServicesInputSortFields {
  firstName = 'firstName',
}

registerEnumType(eListServicesInputSortFields, {
  name: 'eListServicesInputSortFields',
});

@ArgsType()
export class ListServiceInput extends ListArgsFactory(() => eListServicesInputSortFields, 'Service') {
}
