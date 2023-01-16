import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Skill} from '../models/skill.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => Skill)
export class SkillResolver {
  @ResolveField('name', () => String)
  resolveTitle(@Parent() skill: Skill, @CurrentLanguage() language: HeaderLanguage) {
    return skill.name[language];
  }
}
