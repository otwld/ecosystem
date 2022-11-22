import { Social } from './social.types';

export interface TeamMember {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  socials?: Social[];
}
