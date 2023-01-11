import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { v4 } from 'uuid';

/*
 *  Those three field are automaticly created my mongo.
 *  We use this class to make graphql aware of them
 */
@ObjectType()
export class BasicModel {
  @Field(() => String, { nullable: false })
  @Prop({ type: String, nullable: false, default: v4 }) // we want uuid over ObjectId.
  _id: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: false })
  updatedAt: Date;
}
