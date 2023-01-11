/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';

@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Member extends BasicModel {
  @Prop({type: String})
  @Field(() => String, {nullable: false})
  firstName: string;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type MemberDocument = Member & Document;
export const MemberSchema = SchemaFactory.createForClass(Member);
/* endregion */
