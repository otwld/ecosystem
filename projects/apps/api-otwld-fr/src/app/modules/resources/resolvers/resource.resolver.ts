import {Args, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {GetResourceUrlInputDto} from '../models/dtos/get-picture-url.dto';
import {Resource} from '../models/resource.model';
import {AppLogger} from '@ecosystem/nest-shared';
import {
  ResourceService
} from '@ecosystem/nest-shared';

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private logger: AppLogger, private readonly resourceService: ResourceService) {
  }

  @ResolveField('url', () => String)
  resolvePictureUrl(@Parent() picture: Resource, @Args('options') args: GetResourceUrlInputDto) {
    this.logger.verbose('resolvePictureUrl');
    if (picture && picture.storageEngine === 's3') {
      return '' //this.resourceService.resolveFileUrl(picture, args.size)
    } else if (picture && picture.storageEngine === 'external') {
      return picture.path;
    }
    return '';
  }
}
