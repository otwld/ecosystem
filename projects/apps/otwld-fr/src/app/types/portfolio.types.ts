import { Service } from './service.types';
import { Skill } from './skill.types';

export type Portfolio = PortfolioItem[];

export interface PortfolioItem {
  templateURL: string;
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
