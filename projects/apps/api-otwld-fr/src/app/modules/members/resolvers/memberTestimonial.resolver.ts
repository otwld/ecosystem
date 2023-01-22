import {Context, Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {MemberTestimonial} from '../models/memberTestimonial.model';
import {Testimonial} from '../../testimonials/models/testimonial.model';
import * as DataLoader from 'dataloader';

@Resolver(() => MemberTestimonial)
export class MemberTestimonialResolver {
  @ResolveField('testimonial', () => Testimonial)
  async resolveTestimonial(@Parent() memberTestimonial: MemberTestimonial,
                           @Context('testimonialLoader') testimonialsLoader: DataLoader<string, Testimonial>) {
    return testimonialsLoader.load(memberTestimonial.testimonial);
  }
}
