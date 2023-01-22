import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';
import {TestimonialAuthor} from '../models/testimonial-author.model';

@Resolver(() => TestimonialAuthor)
export class TestimonialAuthorResolver {
  @ResolveField('job',() => String)
  contentResolver(@Parent() testimonial: TestimonialAuthor, @CurrentLanguage() language: HeaderLanguage) {
    return testimonial.job[language];
  }
}
