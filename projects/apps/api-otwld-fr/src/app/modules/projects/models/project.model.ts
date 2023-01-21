/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {Service} from '../../services/models/service.model';
import {Skill} from '../../skills/models/skill.model';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';
import {Member} from '../../members/models/member.model';
import {Testimonial} from '../../testimonials/models/testimonial.model';


@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Project extends BasicModel {
  @Prop({type: TranslationSchema})
  templates: Translation;

  @Prop({type: [String], ref: Service.name})
  @Field(() => Service, {nullable: false})
  services: string[];

  @Prop({type: [String], ref: Skill.name})
  @Field(() => [Skill], {nullable: false})
  skills: string[];

  @Prop({type: [String], ref: Member.name})
  @Field(() => [Member], {nullable: false})
  members: string[];

  @Prop({type: [String], ref: Testimonial.name})
  @Field(() => [Testimonial], {nullable: false})
  testimonials: string[];


  @Prop({type: Date})
  @Field(() => Date, {nullable: false})
  startDate: Date;

  @Prop({type: Date})
  @Field(() => Date, {nullable: false})
  endDate: Date;
  @Prop({type: TranslationSchema})
  title: Translation;

  @Prop({type: ResourceSchema})
  @Field(() => Resource, {nullable: false})
  image: Resource;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);

/* endregion */
