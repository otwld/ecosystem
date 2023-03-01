import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Resource, ResourceSchema} from './models/resource.model';
import {ResourceResolver} from './resolvers/resource.resolver';
import {MulterModule} from '@nestjs/platform-express';
import {ResourceModule} from '@ecosystem/nest-shared';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forFeature([
      {
        name: Resource.name,
        schema: ResourceSchema,
      },
    ]),
    ResourceModule,
  ],
  providers: [ResourceResolver],
  exports: []
})
export class ResourcesModule {
}
