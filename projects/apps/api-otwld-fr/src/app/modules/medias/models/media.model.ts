import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';
import {Document} from 'mongoose';

@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Media extends BasicModel {
  @Prop({type: String, required: true})
  @Field(() => String, {nullable: false})
  type: string;

  @Prop({type: TranslationSchema, required: true})
  title: Translation;

  @Prop({type: String, required: true})
  @Field(() => String, {nullable: false})
  author: string;

  @Prop({type: String, required: true})
  @Field(() => String, {nullable: false})
  link: string;

  @Prop({type: ResourceSchema})
  @Field(() => Resource, {nullable: true})
  image: Resource;

  @Prop({type: ResourceSchema})
  @Field(() => Resource, {nullable: true})
  logo: Resource;

  @Prop({type: [String]})
  members: string[];
}

export const MediaSchema = SchemaFactory.createForClass(Media);
export type MediaDocument = Media & Document;
