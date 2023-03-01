import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Member, MemberDocument} from '../models/member.model';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';
import {ListMemberInput} from '../models/dtos/list-member-input.dto';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class MemberService extends GetMultipleIds<Member> {
  constructor(
    @InjectModel(Member.name) public model: Model<MemberDocument>,
    private readonly paginationService: PaginationService,
    private logger: AppLogger
  ) {
    super(logger, model);
  }

  async getById(id: string): Promise<Member> {
    return this.model.findById(id).lean().exec();
  }

  getMembersPaginated(dto: ListMemberInput) {
    return this.paginationService.paginate(this.model.find(), dto, {lean: true});
  }

  async getOneRandomSlug() {
    const doc = await this.model.aggregate([{
      $sample: {size: 1}
    }]).exec();
    return doc[0].slug;
  }

}
