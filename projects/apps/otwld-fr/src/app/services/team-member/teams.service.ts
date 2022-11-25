import { Injectable } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { TeamMember } from '../../types/team-member.types';

@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
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
      mainSkills: [
        {
          name: 'Angular',
          percentage: 95,
          startDate: new Date('2017-01-01')
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 80,
          startDate: new Date('2019-01-01')
        },
        {
          name: 'NodeJS',
          percentage: 90,
          startDate: new Date('2017-01-01')
        },
        {
          name: 'Kubernetes',
          percentage: 50,
          startDate: new Date('2021-01-01')
        },
        {
          name: 'Pilotage d\'une equipe technique',
          startDate: new Date('2020-01-01'),
          percentage: 75
        }
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
          url: 'https://twitter.com/n_trehout',
        },
        {
          icon: faInstagram,
          url: 'https://www.instagram.com/ntrehout/',
        },
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
      mainSkills: [
        {
          name: 'NestJS',
          percentage: 95,
          startDate: new Date('2017-01-01')
        },
        {
          name: 'NodeJS',
          percentage: 75,
          startDate: new Date('2017-01-01')
        },
        {
          name: 'GraphQL',
          percentage: 80,
          startDate: new Date('2020-01-01')
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 80,
          startDate: new Date('2019-01-01')
        }
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
      mainSkills: [
        {
          name: 'NodeJS',
          percentage: 75,
          startDate: new Date('2017-01-01')
        },
        {
          name: 'Architecture de fonctionnalités complexes',
          percentage: 50,
          startDate: new Date('2019-01-01')
        }
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
