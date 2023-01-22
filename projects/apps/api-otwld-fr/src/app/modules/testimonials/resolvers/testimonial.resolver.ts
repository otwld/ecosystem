import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {Testimonial} from '../models/testimonial.model';
import {CurrentLanguage} from '../../../shared/modules/language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../../shared/modules/language/enums/language.enum';

@Resolver(() => Testimonial)
export class TestimonialResolver {
    @ResolveField('content',() => String)
    contentResolver(@Parent() testimonial: Testimonial, @CurrentLanguage() language: HeaderLanguage) {
        return testimonial.content[language];
    }
}
