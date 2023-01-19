import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {WorkMode} from '../models/workMode.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => WorkMode)
export class WorkModeResolver {
  @ResolveField('name', () => String)
  resolveTitle(@Parent() workMode: WorkMode, @CurrentLanguage() language: HeaderLanguage) {
    return workMode.name[language];
  }

  @ResolveField('description', () => String)
  resolveDescription(@Parent() workMode: WorkMode, @CurrentLanguage() language: HeaderLanguage) {
    return workMode.description[language];
  }
}
