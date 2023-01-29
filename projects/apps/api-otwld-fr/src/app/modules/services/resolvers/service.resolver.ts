import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {ServiceService} from '../services/service.service';
import {Service} from '../models/service.model';
import {ListServicePage} from '../models/dtos/list-service-page.dto';
import {ListServiceInput} from '../models/dtos/list-service-input.dto';
import {LanguageGuard} from '../../../shared/modules/language/guards/language.guard';
import {UseGuards} from '@nestjs/common';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {
  }

  @Query(() => ListServicePage)
  @UseGuards(LanguageGuard)
  async getServicesPaginated(@Args() dto: ListServiceInput) {
    return this.serviceService.getPaginated(dto);
  }

  @Query(() => [Service])
  @UseGuards(LanguageGuard)
  async getAllServices() {
    return this.serviceService.model.find().lean().exec();
  }

  @Query(() => Service)
  @UseGuards(LanguageGuard)
  async getService(@Args('slug') slug: string) {
    return this.serviceService.model.findOne({slug}).lean().exec();
  }

  @ResolveField('content', () => String)
  resolveContent(@Parent() service: Service, @CurrentLanguage() language: HeaderLanguage) {
    return service.content[language];
  }

  @ResolveField('title', () => String)
  resolveTitle(@Parent() service: Service, @CurrentLanguage() language: HeaderLanguage) {
    return service.title[language];
  }

  @ResolveField('description', () => String)
  resolveDescription(@Parent() service: Service, @CurrentLanguage() language: HeaderLanguage) {
    return service.description[language];
  }
}
