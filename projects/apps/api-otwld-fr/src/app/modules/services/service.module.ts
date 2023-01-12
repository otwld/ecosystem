import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Service, ServiceSchema} from './models/service.model';
import {ServiceService} from './services/service.service';
import {ServiceResolver} from './resolvers/service.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: Service.name, schema: ServiceSchema}])],
  providers: [ServiceService, ServiceResolver],
  exports: [ServiceService]
})
export class ServiceModule {
}
