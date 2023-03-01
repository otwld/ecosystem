import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString, MinLength } from 'class-validator';

export type StorageEngine = 's3' | 'external';

/* region ==================== Schema ==================== */
@Schema()
export class Resource {
  @Prop({ nullable: false })
  @IsString()
  @MinLength(2)
  name: string;

  @Prop({ nullable: true })
  @IsString()
  originalName?: string;

  @Prop({ nullable: true })
  @IsString()
  bucket?: string;

  @Prop({ nullable: false })
  @IsString()
  storageEngine: StorageEngine;

  @Prop({ nullable: true })
  @IsNumber()
  size?: number;

  @Prop({ nullable: false })
  @IsString()
  path: string;

  @Prop({ nullable: true })
  @IsString()
  mimeType?: string;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export const ResourceSchema = SchemaFactory.createForClass(Resource);
/* endregion */
