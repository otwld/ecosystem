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
import {ListProjectsPage} from '../../projects/models/dto/list-projects-output.dto';
import {ListProjectsInput} from '../../projects/models/dto/list-projects-input.dto';
import {ProjectService} from '../../projects/services/project.service';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService, private logger: AppLogger, private projectService: ProjectService) {
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

  @ResolveField('projects', () => ListProjectsPage)
  async resolverProjects(@Parent() member: Member, @Args() args: ListProjectsInput ) {
    return await this.projectService.listProjects({...args, criteria: {memberId: member._id}});
  }
}
