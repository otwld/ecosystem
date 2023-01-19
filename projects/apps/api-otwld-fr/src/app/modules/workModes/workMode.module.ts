import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {WorkMode, WorkModeSchema} from './models/workMode.model';
import {WorkModeService} from './services/workMode.service';
import {WorkModeResolver} from './resolvers/workMode.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: WorkMode.name, schema: WorkModeSchema}])],
  providers: [WorkModeService, WorkModeResolver],
  exports: [WorkModeService]
})
export class WorkModeModule {
}
