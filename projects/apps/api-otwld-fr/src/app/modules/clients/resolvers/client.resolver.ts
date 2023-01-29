import {Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {Client} from '../models/client.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {ClientService} from '../services/client.service';
import {UseGuards} from '@nestjs/common';
import {LanguageGuard} from '../../../shared/modules/language/guards/language.guard';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {
  }

  @Query(() => [Client])
  @UseGuards(LanguageGuard)
  getAllClients() {
    return this.clientService.clientModel.find().lean().exec();
  }

  @ResolveField('name', () => String)
  resolveName(@Parent() client: Client, @CurrentLanguage() language: HeaderLanguage): string {
    return client.name[language];
  }
}
