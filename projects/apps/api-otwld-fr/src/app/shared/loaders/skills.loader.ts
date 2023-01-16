import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {SkillService} from '../../modules/skills/services/skill.service';

export function createSkillsLoader(logger: AppLogger, service: SkillService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
