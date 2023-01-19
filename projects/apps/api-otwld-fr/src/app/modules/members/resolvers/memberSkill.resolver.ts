import {Context, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Skill} from '../../skills/models/skill.model';
import * as DataLoader from 'dataloader';
import {MemberSkill} from '../models/memberSkill.model';

@Resolver(() => MemberSkill)
export class MemberSkillResolver {
  @ResolveField('skill', () => Skill)
  resolveSkill(@Parent() memberSkill: MemberSkill, @Context('skillLoader') loader: DataLoader<string, Skill> ) {
    return loader.load(memberSkill.skill);
  }
}
