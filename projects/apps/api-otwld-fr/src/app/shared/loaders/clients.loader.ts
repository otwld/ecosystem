import { createLoader } from './factory.loader';
import {ClientService} from '../../modules/clients/services/client.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createClientLoader(logger: AppLogger, service: ClientService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
