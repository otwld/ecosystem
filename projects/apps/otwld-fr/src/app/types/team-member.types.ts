import { Social } from './social.types';
import { Skill } from './skill.types';
import { Service } from './service.types';
import { Testimonial } from './testimonial.types';
import { Media } from './media.types';

export interface TeamMember {
  testimonials: Testimonial[];
  totalHours: number;
  services: Service[];
  route: string;
  firstName: string;
  lastName: string;
  medias: Media[];
  role: string;
  image: string;
  location: string;
  workMode: string;
  imageTransparent: string;
  socials?: Social[];
  mainSkills: TeamMemberSkill[];
  skills?: Skill[];
}

export interface TeamMemberSkill {
  name: string;
  percentage: number;
  startDate: Date;
}
