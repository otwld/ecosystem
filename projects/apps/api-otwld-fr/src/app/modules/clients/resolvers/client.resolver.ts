import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Client} from '../models/client.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => Client)
export class ClientResolver {
  @ResolveField('name', () => String)
  resolveName(@Parent() client: Client, @CurrentLanguage() language: HeaderLanguage): string {
    return client.name[language];
  }
}
