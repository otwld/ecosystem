import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {TestimonialService} from '../../modules/testimonials/services/testimonial.service';

export function createTestimonialsLoader(logger: AppLogger, service: TestimonialService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
