import { Portfolio, PortfolioItem } from '../app/types/portfolio.types';
import { TEAM_EXTENSION, WEB_DEVELOPMENT } from './service.data';
import { environment } from '../environments/environment';
import { APAIN, NTREHOUT } from './members.data';

// TODO
export const MESDOCTEURS: PortfolioItem = {
  client: 'MesDocteurs',
  hoursSpent: 0,
  image: 'assets/images/portfolio/mesdocteurs.png',
  members: [
    APAIN,
  ],
  relatedProjects: [],
  route: '/portfolio/mesdocteurs',
  services: [
    TEAM_EXTENSION
  ],
  skills: [
     'Angular',
    'NestJS',
    'GraphQL',
    'RxJS'
  ],
  startDate: new Date('2021-11-01').getTime(),
  endDate: new Date('2023-02-3').getTime(),
  templates: { en: environment.templates.portfolio.mesdocteurs.enURL, fr: environment.templates.portfolio.mesdocteurs.frURL },
  title: 'dynamic.portfolio.mesdocteurs.title',
}

export const ATEME: PortfolioItem = {
  client: 'ateme',
  hoursSpent: 0,
  image: 'assets/images/portfolio/ateme.png',
  members: [
    APAIN,
  ],
  relatedProjects: [],
  route: '/portfolio/ateme',
  services: [
    TEAM_EXTENSION
  ],
  skills: [
    'Angular',
    'NestJS',
    'GraphQL',
    'RxJS'
  ],
  startDate: new Date('2021-08-01').getTime(),
  endDate: new Date('2023-11-01').getTime(),
  templates: { en: environment.templates.portfolio.ateme.enURL, fr: environment.templates.portfolio.ateme.frURL },
  title: 'dynamic.portfolio.ateme.title',
};

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
  startDate: new Date('2021-06-01').getTime(),
  endDate: new Date('2022-09-31').getTime(),
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
  startDate: new Date('2022-03-25').getTime(),
  endDate: new Date('2022-07-08').getTime(),
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
  startDate: new Date('2022-03-25').getTime(),
  endDate: new Date('2022-07-08').getTime(),
  hoursSpent: 1200,
  title: 'dynamic.portfolio.jeprecommande.title',
};

export const PORTFOLIO_DATA: Portfolio = [
  { ...OCC, nextProject: ONSTAGE, previousProject: JEPRECOMMANDE, relatedProjects: [MESDOCTEURS] },
  { ...ONSTAGE, nextProject: JEPRECOMMANDE, previousProject: OCC, relatedProjects: [JEPRECOMMANDE] },
  { ...JEPRECOMMANDE, nextProject: MESDOCTEURS, previousProject: ONSTAGE, relatedProjects: [ONSTAGE] },
  { ...MESDOCTEURS, nextProject: ATEME, previousProject: JEPRECOMMANDE, relatedProjects: [ATEME, JEPRECOMMANDE] },
  {...ATEME, nextProject: OCC, previousProject: MESDOCTEURS, relatedProjects: [MESDOCTEURS, JEPRECOMMANDE] }
];
