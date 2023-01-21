import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {Resource, ResourceSchema} from '../../resources/models/resource.model';

@ObjectType()
@Schema({
  ...commonSchemaOption
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
  image: Resource;
}

export const TestimonialAuthorSchema = SchemaFactory.createForClass(TestimonialAuthor);
