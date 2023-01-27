import { AppLogger } from '../modules/logging/logging.service';
import { createLoader } from './factory.loader';
import {MemberService} from '../../modules/members/services/member.service';

export function createMemberLoader(logger: AppLogger, service: MemberService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
