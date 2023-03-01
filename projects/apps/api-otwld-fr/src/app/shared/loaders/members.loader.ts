import { createLoader } from './factory.loader';
import {MemberService} from '../../modules/members/services/member.service';
import {AppLogger} from '@ecosystem/nest-shared';

export function createMemberLoader(logger: AppLogger, service: MemberService) {
  // logger.verbose('createProfessionalLoader');
  return createLoader(service);
}
