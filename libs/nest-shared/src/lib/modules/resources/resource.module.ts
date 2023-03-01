import {Module} from '@nestjs/common';
import {MulterModule} from '@nestjs/platform-express';
import {ConfigService} from '@nestjs/config';
import {ResourceController} from './controllers/resource.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ResourceSchema} from './models/resource.model';
import {LoggingModule} from '../logging/logging.module';
import {ResourceService} from './services/resource.service';
import {S3Engine} from './engines/s3.engine';
import {ExternalEngine} from './engines/external.engine';

const storageEngines = [S3Engine, ExternalEngine];

@Module({
  imports: [MulterModule.registerAsync({
    useFactory: (configService: ConfigService) => ({
      dest: configService.get('multer.dest'),
    }),
    inject: [ConfigService]
  }),
    MongooseModule.forFeature([{
      name: 'Resource',
      schema: ResourceSchema
    }]), LoggingModule],
  controllers: [ResourceController],
  providers: [...storageEngines, ResourceService],
  exports: [ResourceService]
})
export class ResourceModule {
}
