import { createLoader } from './factory.loader';
import {SkillService} from '../../modules/skills/services/skill.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createSkillsLoader(logger: AppLogger, service: SkillService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
