import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

export type StorageEngine = 's3' | 'external';

/* region ==================== Schema ==================== */
@Schema()
@ObjectType()
export class Resource {
  @Prop({ nullable: false })
  @IsString()
  @MinLength(2)
  @Field()
  name: string;

  @Prop({ nullable: true })
  @IsString()
  @Field()
  originalName?: string;

  @Prop({ nullable: true })
  @IsString()
  bucket?: string;

  @Prop({ nullable: false })
  @IsString()
  storageEngine: StorageEngine;

  @Prop({ nullable: false })
  @IsNumber()
  size: number;

  @Prop({ nullable: false })
  @IsString()
  path: string;

  @Prop({ nullable: false })
  @IsString()
  mimeType: string;
}

/* endregion */

/* region ==================== Derivatives ==================== */
export const ResourceSchema = SchemaFactory.createForClass(Resource);
/* endregion */
