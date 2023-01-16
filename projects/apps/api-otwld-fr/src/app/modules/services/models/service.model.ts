/* region ==================== Schema ==================== */
import {Field, ObjectType} from '@nestjs/graphql';
import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {commonSchemaOption} from '../../../shared/objects/schema/common-schema-option';
import {BasicModel} from '../../../shared/objects/model/basic.model';
import {Resource} from '../../resources/models/resource.model';
import {Translation} from '../../../shared/modules/language/models/translation.model';

@ObjectType()
@Schema({
  ...commonSchemaOption,
})
export class Service extends BasicModel {

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  icon: Resource;

  @Prop({type: Translation})
  content: Translation;

  @Prop({type: Translation})
  title: Translation;

  @Prop({type: String})
  @Field(() => String, {nullable: false})
  route: string;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export type ServiceDocument = Service & Document;
export const ServiceSchema = SchemaFactory.createForClass(Service);
/* endregion */
