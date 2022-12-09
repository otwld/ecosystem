import { Service } from './service.types';
import { Skill } from './skill.types';
import { TeamMember } from './team-member.types';

export type Portfolio = PortfolioItem[];

export interface PortfolioItem {
  members: TeamMember[];
  nextProject?: PortfolioItem;
  previousProject?: PortfolioItem;
  relatedProjects: Portfolio;
  templates: {
    en: string;
    fr: string;
  };
  title: string;
  client: string;
  route: string;
  services: Service[];
  skills: Skill[];
  startDate: string;
  endDate: string;
  hoursSpent: number;
  image: string;
}
