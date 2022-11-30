import { Social } from './social.types';
import { Skill } from './skill.types';
import { WorkMode } from './work.types';
import { Service } from './service.types';
import { Portfolio } from './portfolio.types';
import { Testimonial } from './testimonial.types';

export interface TeamMember {
  testimonials: Testimonial[];
  totalHours: number;
  services: Service[];
  route: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  location: string;
  workMode: WorkMode;
  imageTransparent: string;
  socials?: Social[];
  portfolio: Portfolio;
  mainSkills: TeamMemberSkill[];
  skills?: Skill[];
}

export interface TeamMemberSkill {
  name: Skill;
  percentage: number;
  startDate: Date;
}
