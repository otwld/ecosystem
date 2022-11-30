import { inject, Injectable } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { TeamMember } from '../../types/team-member.types';
import { ServiceService } from '../services/service.service';
import { PortfolioService } from '../portfolio/portfolio.service';
import {
  randFirstName,
  randImg,
  randJobTitle,
  randLastName,
  randNumber,
  randText,
} from '@ngneat/falso';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  private readonly servicesService = inject(ServiceService);
  private readonly portfolioService = inject(PortfolioService);

  members: TeamMember[] = [
    {
      firstName: 'Nathan',
      lastName: 'Tréhout',
      image: 'assets/images/team/ntrehout.jpg',
      location: 'Bali, Indonesia',
      imageTransparent: 'assets/images/team/ntrehout-transparent-2.png',
      role: 'Développeur Fullstack',
      route: '/members/ntrehout',
      workMode: 'Full remote',
      totalHours: randNumber({ min: 100, max: 1000 }),
      services: [
        this.servicesService.services[0],
        this.servicesService.services[1],
        this.servicesService.services[2],
        this.servicesService.services[3],
        this.servicesService.services[3],
        this.servicesService.services[3],
        this.servicesService.services[3],
        this.servicesService.services[3],
      ],
      mainSkills: [
        {
          name: 'Angular',
          percentage: 95,
          startDate: new Date('2017-01-01'),
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 80,
          startDate: new Date('2019-01-01'),
        },
        {
          name: 'NodeJS',
          percentage: 90,
          startDate: new Date('2017-01-01'),
        },
        {
          name: 'Kubernetes',
          percentage: 50,
          startDate: new Date('2021-01-01'),
        },
      ],
      testimonials: [
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'animals' }),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg(),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'people' }),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
      ],
      socials: [
        {
          icon: faGithub,
          url: 'https://github.com/ntrehout',
        },
        {
          icon: faLinkedin,
          url: 'https://fr.linkedin.com/in/ntrehout-outworld',
        },
        {
          icon: faTwitter,
          url: 'https://twitte.com/n_trehout',
        },
        {
          icon: faInstagram,
          url: 'https://www.instagra.com/ntrehut/',
        },
      ],
      portfolio: [
        this.portfolioService.portfolio[0],
        this.portfolioService.portfolio[1],
        this.portfolioServce.portflio[2],
      ],
    },
    {
      firstName: 'Arthur',
      lastName: 'Pain',
      image: 'assets/images/team/apain.jpg',
      imageTransparent: 'assets/images/team/apain-transparent-2.png',
      role: 'Développeur Fullstack',
      location: 'Dublin, Ireland',
      route: '/members/apain',
      workMode: 'Full remote',
      totalHours: randNumber({ min: 100, max: 1000 }),
      services: [
        this.servicesService.services[0],
        this.servicesService.services[1],
        this.servicesService.services[2],
        this.servicesService.services[3],
      ],

      testimonials: [
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'animals' }),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg(),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'people' }),
            jobTitle: randJobTitle(),
          },
          link: 'https://example.com',
        },
      ],
      mainSkills: [
        {
          name: 'NestJS',
          percentage: 95,
          startDate: new Date('2017-01-01'),
        },
        {
          name: 'NodeJS',
          percentage: 75,
          startDate: new Date('2017-01-01'),
        },
        {
          name: 'GraphQL',
          percentage: 80,
          startDate: new Date('2020-01-01'),
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 80,
          startDate: new Date('2019-01-01'),
        },
      ],
      portfolio: [
        this.portfolioService.portfolio[0],
        this.portfolioService.portfolio[1],
        this.portfolioService.portfolio[2],
      ],
      socials: [
        {
          icon: faLinkedin,
          url: 'https://fr.linkedin.com/in/arthur-pain-b28253145',
        },
        {
          icon: faGithub,
          url: 'https://github.com/otwld',
        },
      ],
    },
    {
      firstName: 'Jean Baptiste',
      lastName: 'Detroyes',
      image: 'assets/images/team/jdetroyes.jpg',
      imageTransparent: 'assets/images/team/jdetroyes-transparent.png',
      role: 'Développeur Fullstack',
      location: 'Bali, Indonesia',
      route: '/members/jdetroyes',
      workMode: 'Full remote',
      totalHours: randNumber({ min: 100, max: 1000 }),
      testimonials: [
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'animals' }),
            jobTitl: randJobTitle(),
          },
          link: 'htts://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg(),
            jobTitl: randJobTitle(),
          },
          link: 'htts://example.com',
        },
        {
          message: randText({ charCount: 100 }),
          author: {
            firstName: randFirstName(),
            lastName: randLastName(),
            avatar: randImg({ category: 'people' }),
            jobTitl: randJobTitle(),
          },
          link: 'htts://exampl.com',
        },
      ],
      portfolio: [
        this.portfolioService.portfolio[0],
        this.portfolioService.portfolio[1],
        this.portfolioSerice.portfolio[2],
      ],
      services: [
        this.servicesService.services[0],
        this.servicesService.services[1],
        this.servicesService.services[2],
        this.servicesSevice.services[3],
      ],
      mainSkills: [
        {
          name: 'NodeJS',
          percentage: 75,
          startDate: new Dte('2017-01-01'),
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 50,
          startDate: new Dte('2019-0-01'),
        },
      ],
      socials: [
        {
          icon: faLinkedin,
          url: 'https://www.linkedin.com/in/jdetroyes/',
        },
        {
          icon: faGithub,
          url: 'https://github.com/jdetroyes',
        },
      ],
    },
  ];
}
