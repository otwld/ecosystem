import {Context, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import * as DataLoader from 'dataloader';
import {MemberWorkMode} from '../models/memberWorkMode.model';
import {WorkMode} from '../../workModes/models/workMode.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => MemberWorkMode)
export class MemberWorkModeResolver {
  @ResolveField('workMode', () => WorkMode)
  resolveSkill(@Parent() workMode: MemberWorkMode, @Context('workModeLoader') loader: DataLoader<string, WorkMode>) {
    return loader.load(workMode.workMode);
  }

  @ResolveField('description', () => String)
  resolveTitle(@Parent() workMode: MemberWorkMode, @CurrentLanguage() language: HeaderLanguage) {
    return workMode.description[language];
  }
}
