import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Skill} from '../../skills/models/skill.model';

@ObjectType()
@Schema({
  autoIndex: false,
  autoCreate: false,
})
export class MemberSkill {
  @Prop({type: String, ref: Skill.name})
  @Field(() => Skill, {nullable: false})
  skill: string;

  @Prop({type: Number, default: 0})
  @Field(() => Number, {nullable: false})
  level: number;

  @Prop({type: Date})
  @Field(() => Date, {nullable: false})
  startDate: Date;
}

export const MemberSkillSchema = SchemaFactory.createForClass(MemberSkill);
