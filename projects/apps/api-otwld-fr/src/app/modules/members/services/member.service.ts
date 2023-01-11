import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Member, MemberDocument} from '../models/member.model';
import {PaginationOption} from '../../../shared/modules/pagination/models/input/pagination.input';
import {PaginationService} from '../../../shared/modules/pagination/pagination.service';
import {ListMemberInput} from '../models/dtos/list-member-input.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name) protected model: Model<MemberDocument>,
    private readonly paginationService: PaginationService
  ) {
  }

  async getById(id: string): Promise<Member> {
    return this.model.findById(id).lean().exec();
  }

  getMembersPaginated(dto: ListMemberInput) {
    return this.paginationService.paginate(this.model.find(), dto, {lean: true});
  }
}
