import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
  autoIndex: false,
  autoCreate: false
})
export class Translation {
  @Prop({nullable: false, type: String})
  fr: string;
  @Prop({nullable: false, type: String})
  en: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
