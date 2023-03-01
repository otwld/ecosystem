import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {GetMultipleIds} from '../../../shared/objects/services/multiple-id.service';
import {Client, ClientDocument} from '../models/client.model';
import {Model} from 'mongoose';
import {AppLogger} from '@ecosystem/nest-shared';

@Injectable()
export class ClientService extends GetMultipleIds<Client> {
  constructor(@InjectModel(Client.name) public clientModel: Model<ClientDocument>,
              private readonly logger: AppLogger) {
    super(logger, clientModel);
    logger.setContext(ClientService.name);
  }
}
