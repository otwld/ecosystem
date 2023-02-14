import {Module} from '@nestjs/common';
import {MongooseSetupService} from './mongoose-setup.service';

@Module({
  imports: [],
  providers: [MongooseSetupService],
  exports: [MongooseSetupService],
})
export class MongooseSetupModule {

}
