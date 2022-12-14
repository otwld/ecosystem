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

export const TESTIMONIALS_DATA: Testimonial[] = [
  FAKE_TESTIMONIAL_001,
  FAKE_TESTIMONIAL_002,
  MY_TESTIMONIAL,
];
