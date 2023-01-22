import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';

@ObjectType()
@Schema({
  autoCreate: false,
  autoIndex: false,
})
export class TestimonialAuthor {
  @Prop({type: String})
  @Field(() => String, {nullable: false})
  firstName: string;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  lastName: string;

  @Prop({type: ResourceSchema})
  @Field(() => Resource, {nullable: false})
  image?: Resource;

  @Prop({type: TranslationSchema})
  job: Translation;
}

export const TestimonialAuthorSchema = SchemaFactory.createForClass(TestimonialAuthor);
