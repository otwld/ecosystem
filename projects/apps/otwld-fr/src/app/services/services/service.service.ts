import { Injectable } from '@angular/core';
import {
  faDesktop, faGlobe,
  faHands,
  faMobileScreen,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Service } from '../../types/service.types';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Service[] = [
    {
      icon: faGlobe,
      title: 'services.web-development.title',
      route: '/services/web-development',
      templateURL: 'assets/static/services/web-development.html',
      description: 'services.web-development.description',
    },
    {
      icon: faMobileScreen,
      title: 'services.mobile-development.title',
      route: '/services/mobile-development',
      templateURL: 'assets/static/services/mobile-development.html',
      description: 'services.mobile-development.description',
    },
    {
      icon: faDesktop,
      title: 'services.desktop-development.title',
      route: '/services/desktop-development',
      templateURL: 'assets/static/services/desktop-development.html',
      description: 'services.desktop-development.description',
    },
    {
      icon: faUsers,
      title: 'services.team-extension.title',
      route: '/services/team-extension',
      templateURL: 'assets/static/services/team-extension.html',
      description: 'services.team-extension.description',
    },
  ];
}

