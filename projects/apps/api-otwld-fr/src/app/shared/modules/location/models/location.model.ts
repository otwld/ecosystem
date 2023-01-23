import {Field, ObjectType} from '@nestjs/graphql';
import {commonSchemaOption} from '../../../objects/schema/common-schema-option';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Translation, TranslationSchema} from '../../language/models/translation.model';

@ObjectType()
@Schema({
  autoCreate: false,
  autoIndex: false
})
export class Location {
  @Prop({type: TranslationSchema})
  city: Translation;

  @Prop({type: TranslationSchema})
  country: Translation;

  @Prop({type: String})
  @Field(() => String, {nullable: true})
  street?: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
