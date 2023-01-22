import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {ProjectService} from '../../modules/projects/services/project.service';

export function createProjectLoader(logger: AppLogger, service: ProjectService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
