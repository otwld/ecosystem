/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {TestimonialAuthor, TestimonialAuthorSchema} from './testimonial-author.model';
import {Project} from '../../projects/models/project.model';
import {Member} from '../../members/models/member.model';


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

  @Prop({type: String})
  @Field(() => Project, {nullable: false})
  project: string;

  @Prop({type: [String]})
  @Field(() => [Member], {nullable: false})
  members: string[];
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type TestimonialDocument = Testimonial & Document;
export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);

/* endregion */
