import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ObjectType} from '@nestjs/graphql';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {Translation} from '../../../shared/modules/language/models/translation.model';
import {Document} from 'mongoose';
import {BasicModel} from '../../../shared/objects/model/basic.model';

@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class WorkMode extends BasicModel {
  @Prop({type: Translation})
  name: Translation;

  @Prop({type: Translation})
  description: Translation;
}

export type WorkModeDocument = WorkMode & Document;
export const WorkModeSchema = SchemaFactory.createForClass(WorkMode);
