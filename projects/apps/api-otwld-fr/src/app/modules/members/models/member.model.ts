/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {MemberSkill, MemberSkillSchema} from './memberSkill.model';
import {MemberWorkMode, MemberWorkModeSchema} from './memberWorkMode.model';
import {MemberSocial, MemberSocialSchema} from './memberSocials.model';
import {Project} from '../../projects/models/project.model';
import {MemberTestimonial, MemberTestimonialSchema} from './memberTestimonial.model';


@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Member extends BasicModel {
  @Prop({type: String})
  @Field(() => String, {nullable: false})
  firstName: string;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  slug: string;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  lastName: string;

  @Prop({type: [MemberSkillSchema]})
  @Field(() => [MemberSkill], {nullable: false})
  skills: MemberSkill[];

  @Prop({type: [MemberWorkModeSchema]})
  @Field(() => [MemberWorkMode], {nullable: false})
  workModes: MemberWorkMode[];

  @Prop({type: [MemberSocialSchema]})
  @Field(() => [MemberSocial], {nullable: false})
  socials: MemberSocial[];
  @Prop({type: [String], ref: 'Project'})
  projects: string[]

  @Prop({type: [MemberTestimonialSchema]})
  @Field(() => [MemberTestimonial])
  testimonials: MemberTestimonial[];

  @Prop({type: [String], ref: 'Service'})
  services: string[];
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type MemberDocument = Member & Document;
export const MemberSchema = SchemaFactory.createForClass(Member);

/* endregion */
