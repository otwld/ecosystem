import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';
import {Document} from 'mongoose';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';
@ObjectType()
@Schema({
  ...commonSchemaOption
})
export class Client extends BasicModel {
  @Prop({type: TranslationSchema})
  name: Translation;

  @Prop({type: ResourceSchema})
  @Field(() => Resource)
  logo: Resource;

  @Prop({type: String})
  @Field(() => String)
  website: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
export type ClientDocument = Client & Document;
