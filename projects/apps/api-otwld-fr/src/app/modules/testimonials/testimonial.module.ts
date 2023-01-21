import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {TestimonialAuthor, TestimonialAuthorSchema} from './models/testimonial-author.model';
import {Testimonial, TestimonialSchema} from './models/testimonial.model';
import {TestimonialService} from './services/testimonial.service';
import {TestimonialResolver} from './resolvers/testimonial.resolver';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Testimonial.name, schema: TestimonialSchema},
    {name: TestimonialAuthor.name, schema: TestimonialAuthorSchema},
  ])],
  providers: [TestimonialService, TestimonialResolver],
  exports: [TestimonialService]
})
export class TestimonialModule {

}
