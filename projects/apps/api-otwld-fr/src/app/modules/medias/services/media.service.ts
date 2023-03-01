import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {FilterQuery, Model} from 'mongoose';
import {Media, MediaDocument} from '../models/media.model';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {ListMediasInput} from '../models/dto/list-medias-input.dto';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class MediaService extends GetMultipleIds<Media> {
  constructor(@InjectModel('Media') private readonly mediaModel: Model<MediaDocument>, private logger: AppLogger,
              private paginationService: PaginationService) {
    super(logger, mediaModel);
    this.logger.setContext(this.constructor.name);
  }

  async listMedias(args: ListMediasInput) {
    this.logger.verbose('listMedias');
    const query: FilterQuery<Media> = {};

    if (args.criteria.memberId) {
      query.members = {$in: [args.criteria.memberId]};
    }

    const result = await this.paginationService.paginate(this.model.find(query), args, {lean: true});
    return result
  }
}
