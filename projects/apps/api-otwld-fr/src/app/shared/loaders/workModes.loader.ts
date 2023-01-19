import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {WorkModeService} from '../../modules/workModes/services/workMode.service';

export function createWorkModesLoader(logger: AppLogger, service: WorkModeService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
