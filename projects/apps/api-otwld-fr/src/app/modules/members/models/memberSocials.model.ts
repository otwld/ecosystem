import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class MemberSocial {
  @Prop({type: String})
  @Field(() => String, {nullable: false})
  serviceName: string;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  link: string;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  icon: string;
}

export const MemberSocialSchema = SchemaFactory.createForClass(MemberSocial);
