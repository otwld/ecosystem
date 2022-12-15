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
import {APAIN_TESTIMONIALS, FAKE_TESTIMONIAL_001} from './testimonials.data';

export const NTREHOUT: TeamMember = {
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
  medias: [
    {
      type: 'tweet',
      tweetId: '968549086596141057',
    },
    {
      type: 'article',
      title: 'dynamic.medias.tendance-ouest.jeprecommande',
      author: 'Tendance Ouest',
      link: 'https://www.tendanceouest.com/actualite-373284-manche-jeprecommande-fr-un-site-internet-pour-les-commercants-du-cotentin',
      image: 'https://www.tendanceouest.com/photos/1200/373284/',
      logo: 'https://www.tendanceouest.com/pochettes/1955090.jpg',
    },
    {
      type: 'article',
      title: 'dynamic.medias.ionis-group.jeprecommande',
      author: 'Ionis Group',
      link: 'https://actu.ionis-group.com/epitech-jeprecommande-fr/',
      image:
        'https://actu.ionis-group.com/wp-content/uploads/2020/12/commande-emporter.jpg',
      logo: 'https://actu.ionis-group.com/wp-content/uploads/2020/08/logo-ionis-mag-white-small.png',
    },
    {
      type: 'article',
      title: 'dynamic.medias.epitech.jeprecommande',
      author: 'Epitech',
      link: 'https://www.epitech.eu/fr/actualites-evenements/etudiants-epitech-rennes-entreprises-normandes-poursuivre-activite/',
      image:
        'https://www.epitech.eu/fr/wp-content/uploads/2020/11/Photo-Nathan-TREHOUT.jpg',
      logo: 'https://www.epitech.eu/fr/wp-content/themes/epitech-technology-theme-child/assets/images/logo_epitech_small_sticky.png',
    },
    {
      type: 'article',
      title: 'dynamic.medias.epitech.jeprecommande',
      author: 'Rennes Infos',
      link: 'https://www.rennes-infos-autrement.fr/deux-etudiants-rennais-en-informatique-aident-le-petit-commerce-de-leur-region-dorigine/',
      image: 'https://www.rennes-infos-autrement.fr/wp-content/uploads/2-7.jpg',
      logo: 'https://www.rennes-infos-autrement.fr/wp-content/uploads/cropped-2ZqZbpP0_400x400-192x192.jpg',
    },
    {
      type: 'tweet',
      tweetId: '927886653989023744',
    },
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
  medias: [],
  // TODO
  services: [
    WEB_DEVELOPMENT,
    MOBILE_DEVELOPMENT,
    DESKTOP_DEVELOPMENT,
    TEAM_EXTENSION,
  ],
  // TODO
  testimonials: APAIN_TESTIMONIALS,
  // TODO
  mainSkills: [
    {
      name: 'NestJS',
      percentage: 95,
      startDate: new Date('2017-01-01'),
    },
    {
      name: 'NodeJS',
      percentage: 90,
      startDate: new Date('2017-01-01'),
    },
    {
      name: 'GraphQL',
      percentage: 80,
      startDate: new Date('2020-01-01'),
    },
    {
      name: 'Angular',
      percentage: 80,
      startDate: new Date('2017-01-01'),
    },
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
};

export const JDETROYES = {
  firstName: 'Jean Baptiste',
  lastName: 'Detroyes',
  image: 'assets/images/team/jdetroyes.jpg',
  imageTransparent: 'assets/images/team/jdetroyes-transparent.png',
  role: 'roles.fullstack-developer',
  medias: [],
  location: 'locations.bali',
  route: '/members/jdetroyes',
  workMode: 'work-modes.full-remote',
  totalHours: randNumber({ min: 100, max: 1000 }),
  testimonials: [FAKE_TESTIMONIAL_001],
  services: [TEAM_EXTENSION, WEB_DEVELOPMENT],
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

export const MEMBERS_DATA: TeamMember[] = [NTREHOUT, APAIN, JDETROYES];
