/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {MemberSkill, MemberSkillSchema} from './memberSkill.model';
import {MemberWorkMode, MemberWorkModeSchema} from './memberWorkMode.model';
import {MemberSocial, MemberSocialSchema} from './memberSocials.model';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {LocationSchema, Location} from '../../../shared/modules/location/models/location.model';


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

  @Prop({type: [String]})
  testimonials: string[];

  @Prop({type: [String], ref: 'Service'})
  services: string[];

  @Prop({type: ResourceSchema})
  @Field(() => Resource, {nullable: true})
  picture?: Resource;

  @Prop({type: TranslationSchema})
  jobTitle: Translation;

  @Prop({type: LocationSchema})
  @Field(() => Location, {nullable: true})
  location: Location;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type MemberDocument = Member & Document;
export const MemberSchema = SchemaFactory.createForClass(Member);

/* endregion */
