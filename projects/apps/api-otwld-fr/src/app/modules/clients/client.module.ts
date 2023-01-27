import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Client, ClientSchema} from './models/client.model';
import {ClientService} from './services/client.service';
import {ClientResolver} from './resolvers/client.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: Client.name, schema: ClientSchema}])],
  providers: [ClientService, ClientResolver],
  exports: [ClientService]
})
export class ClientModule {

}
