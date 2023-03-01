import { createLoader } from './factory.loader';
import {WorkModeService} from '../../modules/workModes/services/workMode.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createWorkModesLoader(logger: AppLogger, service: WorkModeService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
