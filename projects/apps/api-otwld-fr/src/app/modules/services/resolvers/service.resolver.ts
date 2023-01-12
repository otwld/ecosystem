import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {ServiceService} from '../services/service.service';
import {Service} from '../models/service.model';
import {ListServicePage} from '../models/dtos/list-service-page.dto';
import {ListServiceInput} from '../models/dtos/list-service-input.dto';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {
  }

  @Query(() => ListServicePage)
  async getMembers(@Args() dto: ListServiceInput) {
    return this.serviceService.getPaginated(dto);
  }

  @ResolveField('content', () => String)
  resolveContent(@Parent() service: Service) {
    return service.content.fr
  }
}
