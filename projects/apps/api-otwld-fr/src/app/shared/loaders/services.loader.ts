import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {ServiceService} from '../../modules/services/services/service.service';

export function createServicesLoader(logger: AppLogger, service: ServiceService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
