import { Portfolio, PortfolioItem } from '../app/types/portfolio.types';
import { TEAM_EXTENSION, WEB_DEVELOPMENT } from './service.data';
import { environment } from '../environments/environment';
import { APAIN, NTREHOUT } from './members.data';

export const OCC: PortfolioItem = {
  templates: {
    en: environment.templates.portfolio.occ.enURL,
    fr: environment.templates.portfolio.occ.frURL,
  },
  services: [
    TEAM_EXTENSION
  ],
  relatedProjects: [],
  route: '/portfolio/occ',
  skills: [],
  image: 'assets/images/portfolio/occ.png',
  client: 'Adventiel',
  members: [
    NTREHOUT
  ],
  startDate: new Date('2021-06-01').toString(),
  endDate: new Date('2022-09-31').toString(),
  hoursSpent: 1200,
  title: 'dynamic.portfolio.occ.title',
};

export const ONSTAGE: PortfolioItem = {
  route: '/portfolio/onstage',
  templates: {
    en: environment.templates.portfolio.onstage.enURL,
    fr: environment.templates.portfolio.onstage.frURL,
  },
  image: 'assets/images/portfolio/onstage.png',
  services: [WEB_DEVELOPMENT],
  relatedProjects: [],
  members: [NTREHOUT, APAIN],
  client: 'OnStage',
  skills: [],
  startDate: new Date('2022-03-25').toString(),
  endDate: new Date('2022-07-08').toString(),
  hoursSpent: 1200,
  title: 'dynamic.portfolio.onstage.title',
};

export const JEPRECOMMANDE: PortfolioItem = {
  route: '/portfolio/jeprecommande',
  templates: {
    en: environment.templates.portfolio.jeprecommande.enURL,
    fr: environment.templates.portfolio.jeprecommande.frURL,
  },
  members: [NTREHOUT, APAIN],
  image: 'assets/images/portfolio/jeprecommande.png',
  services: [WEB_DEVELOPMENT],
  skills: [],
  client: 'Outworld',
  relatedProjects: [],
  startDate: new Date('2022-03-25').toString(),
  endDate: new Date('2022-07-08').toString(),
  hoursSpent: 1200,
  title: 'dynamic.portfolio.jeprecommande.title',
};

export const PORTFOLIO_DATA: Portfolio = [
  { ...OCC, nextProject: ONSTAGE, previousProject: JEPRECOMMANDE, relatedProjects: [ONSTAGE] },
  { ...ONSTAGE, nextProject: JEPRECOMMANDE, previousProject: OCC, relatedProjects: [OCC] },
  { ...JEPRECOMMANDE, nextProject: OCC, previousProject: ONSTAGE },
];
