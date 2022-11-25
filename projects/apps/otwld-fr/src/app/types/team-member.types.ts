import { Social } from './social.types';
import { Skill } from './skill.types';
import { WorkMode } from './work.types';

export interface TeamMember {
  route: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  location: string;
  workMode: WorkMode;
  imageTransparent: string;
  socials?: Social[];
  mainSkills: TeamMemberSkill[];
  skills?: Skill[];
}

export interface TeamMemberSkill {
  name: Skill;
  percentage: number;
  startDate: Date;
}
