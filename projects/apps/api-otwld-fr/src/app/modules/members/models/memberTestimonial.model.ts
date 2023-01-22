import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@ObjectType()
@Schema({
  autoCreate: false,
  autoIndex: false
})
export class MemberTestimonial {
  @Prop({type: String})
  project: string;

  @Prop({type: String})
  testimonial: string;
}

export const MemberTestimonialSchema = SchemaFactory.createForClass(MemberTestimonial);
