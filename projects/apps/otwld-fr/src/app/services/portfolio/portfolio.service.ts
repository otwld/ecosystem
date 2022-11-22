import { Injectable } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Portfolio } from '../../types/portfolio.types';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolio: Portfolio = [
    {
      templateURL: 'assets/static/portfolio/occ.html',
      services: [
        this.servicesService.services[0],
        this.servicesService.services[1],
      ],
      route: '/portfolio/occ',
      skills: [],
      image: 'assets/images/portfolio/occ.png',
      client: 'Adventiel',
      startDate: new Date('2022-03-25').toString(),
      endDate: new Date('2022-07-08').toString(),
      hoursSpent: 1200,
      title: 'OfflineFirst CRM System',
    },
    {
      route: '/portfolio/onstage',
      templateURL: 'assets/static/portfolio/onstage.html',
      image: 'assets/images/portfolio/onstage.png',
      services: [this.servicesService.services[0]],
      client: 'OnStage',
      skills: [],
      startDate: new Date('2022-03-25').toString(),
      endDate: new Date('2022-07-08').toString(),
      hoursSpent: 1200,
      title: 'AudioVisual Freelancing Platform',
    },
    {
      route: '/portfolio/jeprecommande',
      templateURL: 'assets/static/portfolio/jeprecommande.html',
      image: 'assets/images/portfolio/jeprecommande.png',
      services: [
        this.servicesService.services[0],
        this.servicesService.services[1],
      ],
      skills: [],
      client: 'Outworld',
      startDate: new Date('2022-03-25').toString(),
      endDate: new Date('2022-07-08').toString(),
      hoursSpent: 1200,
      title: 'Click & Collect Solution',
    },
  ];

  constructor(private readonly servicesService: ServiceService) {}
}
