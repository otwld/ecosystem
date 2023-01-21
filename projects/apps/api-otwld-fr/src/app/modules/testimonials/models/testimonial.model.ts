/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {TestimonialAuthor, TestimonialAuthorSchema} from './testimonial-author.model';


@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Testimonial extends BasicModel {
  @Prop({type: TranslationSchema})
  content: Translation;

  @Prop({type: TestimonialAuthorSchema})
  @Field(() => TestimonialAuthor, {nullable: false})
  author: TestimonialAuthor;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type TestimonialDocument = Testimonial & Document;
export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);

/* endregion */
