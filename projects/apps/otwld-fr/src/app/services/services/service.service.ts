import { Injectable } from '@angular/core';
import {
  faBrain,
  faCloud,
  faCode,
  faDatabase,
  faHands,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Service } from '../../types/service.types';
import { randText } from '@ngneat/falso';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Service[] = [
    {
      icon: faHands,
      titleTranslationKey: 'IT Management',
      route: '/services/it-management',
      templateURL: 'assets/static/it-management.html',
      description: randText({ charCount: 100 }),
    },
    {
      icon: faCloud,
      titleTranslationKey: 'Cloud Service',
      route: '/services/cloud-service',
      templateURL: 'assets/static/cloud-service.html',
      description: randText({ charCount: 100 },
    },
    {
      icon: faDatabase,
      titleTranslationKey: 'Data Service',
      route: '/services/data-service',
      templateURL: 'assets/static/data-service.html',
      description: randText({ charCount: 100 })
    },
    {
      icon: faLayerGroup,
      titleTranslationKey: 'Cloud Security',
      route: '/services/cloud-security',
      templateURL: 'assets/static/cloud-security.html',
      description: randText({ charCount: 100 })
    },
    {
      icon: faCode,
      titleTranslationKey: 'Web Service',
      route: '/services/web-service',
      templateURL: 'assets/static/web-service.html',
      description: randText({ charCount: 100 })
    },
    {
      icon: faBrain,
      titleTranslationKey: 'Machine Learning',
      route: '/services/machine-learning',
      templateURL: 'assets/static/machine-learning.html',
      description: randText({ charCount: 100 })
    }
  ];
}

