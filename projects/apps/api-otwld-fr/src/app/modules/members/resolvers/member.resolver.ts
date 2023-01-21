import {Args, Context, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {Member} from '../models/member.model';
import {MemberService} from '../services/member.service';
import {ListMemberPage} from '../models/dtos/list-member-page.dto';
import {ListMemberInput} from '../models/dtos/list-member-input.dto';
import {AppLogger} from '../../../shared/modules/logging/logging.service';
import {UseGuards} from '@nestjs/common';
import {LanguageGuard} from '../../../shared/modules/language/guards/language.guard';
import {Project} from '../../projects/models/project.model';
import * as DataLoader from 'dataloader';
import {Skill} from '../../skills/models/skill.model';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService, private logger: AppLogger) {
    this.logger.setContext(MemberResolver.name);
  }

  @Query(() => Member)
  @UseGuards(LanguageGuard)
  getMemberById(@Args('id') id: string): Promise<Member> {
    return this.memberService.getById(id);
  }

  @Query(() => Member)
  @UseGuards(LanguageGuard)
  getMemberBySlug(@Args('slug') slug: string): Promise<Member> {
    return this.memberService.getOneByFilter({slug});
  }

  @Query(() => ListMemberPage)
  async getMembers(@Args() dto: ListMemberInput) {
    return this.memberService.getMembersPaginated(dto);
  }

  @ResolveField('projects', () => [Project])
  resolverProjects(@Parent() member: Member, @Context('projectLoader') loader: DataLoader<string, Project> ) {
    return loader.loadMany(member.projects || []);
  }
}
