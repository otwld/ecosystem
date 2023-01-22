import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {WorkMode} from '../../workModes/models/workMode.model';
import {Translation} from '../../../shared/modules/language/models/translation.model';

@ObjectType()
@Schema({
  autoCreate: false,
  autoIndex: false
})
export class MemberWorkMode {
  @Prop({type: String, ref: WorkMode.name})
  @Field(() => WorkMode, {nullable: false})
  workMode: string;

  @Prop({type: Translation})
  description: Translation;
}

export const MemberWorkModeSchema = SchemaFactory.createForClass(MemberWorkMode);
