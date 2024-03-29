/* region ==================== Schema ==================== */
import {ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Translation, TranslationSchema} from '../../../shared/modules/language/models/translation.model';

@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Skill extends BasicModel {
  @Prop({type: TranslationSchema})
  name: Translation;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type SkillDocument = Skill & Document;
export const SkillSchema = SchemaFactory.createForClass(Skill);
/* endregion */
