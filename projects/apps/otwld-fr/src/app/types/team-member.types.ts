import { Social } from './social.types';

export interface TeamMember {
  route: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  imageTransparent: string;
  socials?: Social[];
}
