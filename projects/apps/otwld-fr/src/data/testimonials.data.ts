import { Testimonial } from '../app/types/testimonial.types';
import {
  randFirstName,
  randImg,
  randJobTitle,
  randLastName,
  randText,
} from '@ngneat/falso';

// TODO
export const MY_TESTIMONIAL: Testimonial = {
  author: { avatar: '', firstName: '', jobTitle: '', lastName: '' },
  link: '',
  message: '',
};

export const FAKE_TESTIMONIAL_001: Testimonial = {
  message: randText({ charCount: 100 }),
  author: {
    firstName: randFirstName(),
    lastName: randLastName(),
    avatar: randImg({ category: 'animals' }),
    jobTitle: randJobTitle(),
  },
  link: 'https://example.com',
};

export const FAKE_TESTIMONIAL_002: Testimonial = {
  message: randText({ charCount: 100 }),
  author: {
    firstName: randFirstName(),
    lastName: randLastName(),
    avatar: randImg({ category: 'people' }),
    jobTitle: randJobTitle(),
  },
  link: 'https://example.com',
};
export const APAIN_TESTIMONIALS: Testimonial[] = [
  {
    message:
      "Arthur est un collègue avec lequel j'ai énormément apprécié travailler. " +
      "Souriant et sociable, il est amoureux de son métier. ll cherchera toujours la meilleure pratique et la meilleure façon de réaliser une tâche. Professionnel et consciencieux, il n'hésitera pas à faire des heures supplémentaires pour résoudre des problèmes urgent ou intervenir en Production." +
      'brille particulièrement dans le développement Front, ou il aimera passer du temps à coder des tâches complexe de la manière la plus élégante et efficiente possible.' +
      "Plus jeune que les collègues habituel que j'ai pu fréquenter, il fait partie des développeurs avec lesquels j'ai préféré travailler." +
      "Je n'hésiterais pas à le recommander sur n'importe quel projet web ambitieux.",
    link: 'https://www.linkedin.com/in/arthur-pain-b28253145/',
    author: {
      firstName: 'Robin',
      lastName: 'Didier',
      avatar: '',
      jobTitle: 'Développeur fullstack',
    },
  },
  {
    message:
      'Arthur a rejoint le projet il y a 7 mois pour renforcer notre équipe de développement.' +
      " On a rapidement été étonnés par sa capacité à prendre le projet en main et à s'occuper de grosses features" +
      ' (par exemple toute la gestion du paiement via stripe). Il maîtrise parfaitement le back et le front et a été un' +
      " vrai moteur dans l'équipe. Il a même pris le lead sur une des squads, a pris des décisions très stratégiques" +
      " pour l'équipe et n'a pas hésité à former les plus juniors. Nous avons dû couper court au projet malheureusement" +
      ' pour cause de rachat mais si la situation avait été différente, nous aurions reconduit Arthur avec plaisir.' +
      " C'est un excellent communiquant, il travaille très bien en équipe et produit un code de qualité." +
      ' Je le recommande vivement.',
    link: 'https://www.linkedin.com/in/arthur-pain-b28253145/',
    author: {
      firstName: 'Sandy',
      lastName: 'Giustino',
      avatar: '',
      jobTitle: 'CTO adjointe',
    },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  FAKE_TESTIMONIAL_001,
  FAKE_TESTIMONIAL_002,
  MY_TESTIMONIAL,
];
