import { createLoader } from './factory.loader';
import {ServiceService} from '../../modules/services/services/service.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createServicesLoader(logger: AppLogger, service: ServiceService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
