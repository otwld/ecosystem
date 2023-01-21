import {Resolver} from '@nestjs/graphql';
import {Testimonial} from '../models/testimonial.model';

@Resolver(() => Testimonial)
export class TestimonialResolver {

}
