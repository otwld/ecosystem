import { createLoader } from './factory.loader';
import {ProjectService} from '../../modules/projects/services/project.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createProjectLoader(logger: AppLogger, service: ProjectService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
