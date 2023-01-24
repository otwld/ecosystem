import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Media, MediaSchema} from './models/media.model';
import {MediaResolver} from './resolver/media.resolver';
import { MediaService } from './services/media.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Media.name,
    schema: MediaSchema
  }])],
  providers: [MediaResolver, MediaService],
  exports: [MediaService]
})
export class MediaModule {
}
