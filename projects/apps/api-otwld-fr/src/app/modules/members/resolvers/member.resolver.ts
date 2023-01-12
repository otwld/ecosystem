import {Args, Query, Resolver} from '@nestjs/graphql';
import {Member} from '../models/member.model';
import {MemberService} from '../services/member.service';
import {ListMemberPage} from '../models/dtos/list-member-page.dto';
import {ListMemberInput} from '../models/dtos/list-member-input.dto';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {
  }

  @Query(() => Member)
  getMemberById(@Args('id') id: string): Promise<Member> {
    return this.memberService.getById(id);
  }

  @Query(() => ListMemberPage)
  async getMembers(@Args() dto: ListMemberInput) {
    return this.memberService.getMembersPaginated(dto);
  }
}
