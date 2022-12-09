import {
  faDesktop,
  faGlobe,
  faMobileScreen,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Service } from '../app/types/service.types';
import { environment } from '../environments/environment';

export const WEB_DEVELOPMENT: Service = {
  icon: faGlobe,
  title: 'services.web-development.title',
  route: '/services/web-development',
  templates: {
    en: environment.templates.services['web-development'].enURL,
    fr: environment.templates.services['web-development'].frURL,
  },
  description: 'services.web-development.description',
};

export const MOBILE_DEVELOPMENT: Service = {
  icon: faMobileScreen,
  title: 'services.mobile-development.title',
  route: '/services/mobile-development',
  templates: {
    en: environment.templates.services['mobile-development'].enURL,
    fr: environment.templates.services['mobile-development'].frURL,
  },
  description: 'services.mobile-development.description',
};

export const DESKTOP_DEVELOPMENT: Service = {
  icon: faDesktop,
  title: 'services.desktop-development.title',
  route: '/services/desktop-development',
  templates: {
    en: environment.templates.services['desktop-development'].enURL,
    fr: environment.templates.services['desktop-development'].frURL,
  },
  description: 'services.desktop-development.description',
};

export const TEAM_EXTENSION: Service = {
  icon: faUsers,
  title: 'services.team-extension.title',
  route: '/services/team-extension',
  templates: {
    en: environment.templates.services['team-extension'].enURL,
    fr: environment.templates.services['team-extension'].frURL,
  },
  description: 'services.team-extension.description',
};

export const SERVICE_DATA: Service[] = [
  WEB_DEVELOPMENT,
  MOBILE_DEVELOPMENT,
  DESKTOP_DEVELOPMENT,
  TEAM_EXTENSION,
];
