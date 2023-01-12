import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resource, ResourceSchema } from './models/resource.model';
import { ResourceResolver } from './resolvers/resource.resolver';
import { S3Module } from '../../shared/modules/s3/s3.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Resource.name,
        schema: ResourceSchema,
      },
    ]),
    S3Module,
  ],
  providers: [ResourceResolver],
})
export class ResourcesModule {}
