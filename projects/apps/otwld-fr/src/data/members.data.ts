import { TeamMember } from '../app/types/team-member.types';
import { randNumber } from '@ngneat/falso';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  DESKTOP_DEVELOPMENT,
  MOBILE_DEVELOPMENT,
  TEAM_EXTENSION,
  WEB_DEVELOPMENT,
} from './service.data';
import { FAKE_TESTIMONIAL_001 } from './testimonials.data';

export const NTREHOUT = {
  firstName: 'Nathan',
  lastName: 'Tréhout',
  image: 'assets/images/team/ntrehout.jpg',
  location: 'locations.bali',
  imageTransparent: 'assets/images/team/ntrehout-transparent-2.png',
  role: 'roles.fullstack-developer',
  route: '/members/ntrehout',
  workMode: 'work-modes.full-remote',
  totalHours: randNumber({ min: 100, max: 1000 }),
  services: [
    WEB_DEVELOPMENT,
    MOBILE_DEVELOPMENT,
    DESKTOP_DEVELOPMENT,
    TEAM_EXTENSION,
  ],
  mainSkills: [
    {
      name: 'Angular',
      percentage: 95,
      startDate: new Date('2017-01-01'),
    },
    {
      name: 'skills.complex-feature',
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
  testimonials: [FAKE_TESTIMONIAL_001],
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
};

export const APAIN: TeamMember = {
  firstName: 'Arthur',
  lastName: 'Pain',
  image: 'assets/images/team/apain.jpg',
  imageTransparent: 'assets/images/team/apain-transparent-2.png',
  role: 'roles.fullstack-developer',
  location: 'locations.dublin',
  route: '/members/apain',
  workMode: 'work-modes.full-remote',
  // TODO
  totalHours: randNumber({ min: 100, max: 1000 }),
  // TODO
  services: [
    WEB_DEVELOPMENT,
    MOBILE_DEVELOPMENT,
    DESKTOP_DEVELOPMENT,
    TEAM_EXTENSION
  ],
  // TODO
  testimonials: [
    FAKE_TESTIMONIAL_001,
  ],
  // TODO
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
      name: 'skills.complex-feature',
      percentage: 80,
      startDate: new Date('2019-01-01'),
    },
  ],
  // TODO
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
};

export const JDETROYES = {
  firstName: 'Jean Baptiste',
  lastName: 'Detroyes',
  image: 'assets/images/team/jdetroyes.jpg',
  imageTransparent: 'assets/images/team/jdetroyes-transparent.png',
  role: 'roles.fullstack-developer',
  location: 'locations.bali',
  route: '/members/jdetroyes',
  workMode: 'work-modes.full-remote',
  totalHours: randNumber({ min: 100, max: 1000 }),
  testimonials: [
    FAKE_TESTIMONIAL_001,
  ],
  services: [
    TEAM_EXTENSION,
    WEB_DEVELOPMENT,
  ],
  mainSkills: [
    {
      name: 'NodeJS',
      percentage: 75,
      startDate: new Date('2017-01-01'),
    },
    {
      name: 'skills.complex-feature',
      percentage: 50,
      startDate: new Date('2019-0-01'),
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
};

export const MEMBERS_DATA: TeamMember[] = [
  NTREHOUT,
  APAIN,
  JDETROYES,
];
