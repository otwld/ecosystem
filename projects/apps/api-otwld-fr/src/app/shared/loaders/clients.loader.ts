import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {ClientService} from '../../modules/clients/services/client.service';

export function createClientLoader(logger: AppLogger, service: ClientService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
