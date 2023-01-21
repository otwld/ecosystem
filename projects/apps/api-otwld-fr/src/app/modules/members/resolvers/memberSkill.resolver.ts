import {Context, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Skill} from '../../skills/models/skill.model';
import * as DataLoader from 'dataloader';
import {MemberSkill} from '../models/memberSkill.model';
import {formatDistance} from 'date-fns';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {fr, enUS} from 'date-fns/locale';
@Resolver(() => MemberSkill)
export class MemberSkillResolver {
  @ResolveField('yearOfExperience', () => String)
  resolveYearOfExperience(@Parent() memberSkill: MemberSkill, @CurrentLanguage() language: HeaderLanguage) {
    return formatDistance(memberSkill.startDate, new Date(), {includeSeconds: true, addSuffix: false, locale: language === HeaderLanguage.FR ? fr : enUS});
  }
  @ResolveField('skill', () => Skill)
  resolveSkill(@Parent() memberSkill: MemberSkill, @Context('skillLoader') loader: DataLoader<string, Skill> ) {
    return loader.load(memberSkill.skill);
  }
}
