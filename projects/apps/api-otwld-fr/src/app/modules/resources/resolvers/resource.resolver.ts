import {Args, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {GetResourceUrlInputDto} from '../models/dtos/get-picture-url.dto';
import {Resource} from '../models/resource.model';
import {AppLogger} from '../../../shared/modules/logging/logging.service';
import {S3Service} from '../../../shared/modules/s3/s3.service';

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private logger: AppLogger, private readonly s3Service: S3Service) {
  }

  @ResolveField('url', () => String)
  resolvePictureUrl(@Parent() picture: Resource, @Args('options') args: GetResourceUrlInputDto) {
    this.logger.verbose('resolvePictureUrl');
    return picture ? this.s3Service.resolveFileUrl(picture, args.size) : '';
  }
}
