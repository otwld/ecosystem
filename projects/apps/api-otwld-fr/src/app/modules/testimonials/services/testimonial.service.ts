import {Injectable} from '@nestjs/common';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {Testimonial, TestimonialDocument} from '../models/testimonial.model';
import {Model} from 'mongoose';
import {AppLogger} from '../../../shared/modules/logging/logging.service';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class TestimonialService extends GetMultipleIds<Testimonial> {
  constructor(@InjectModel(Testimonial.name) private readonly testimonialModel: Model<TestimonialDocument>,
              private logger: AppLogger) {
    super(logger, testimonialModel);
    logger.setContext(TestimonialService.name);
  }

}
