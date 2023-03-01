import { createLoader } from './factory.loader';
import {TestimonialService} from '../../modules/testimonials/services/testimonial.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createTestimonialsLoader(logger: AppLogger, service: TestimonialService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
