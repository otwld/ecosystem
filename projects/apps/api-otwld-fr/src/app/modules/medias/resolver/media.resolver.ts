import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Media} from '../models/media.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => Media)
export class MediaResolver {
  @ResolveField('title', () => String)
  resolveTitle(@Parent() media: Media, @CurrentLanguage() language: HeaderLanguage) {
    console.log('resolveTitle', media, language);
    return media.title[language];
  }
}
