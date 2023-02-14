import { Testimonial } from '../../../src/app/modules/testimonials/models/testimonial.model';
import {createTranslatedField} from './fixture.utils';

export const Testimonial1: Partial<Testimonial> = {
  author: {
    job: createTranslatedField('Développeur', 'Developer'),
    firstName: 'John',
    lastName: 'Doe',
  },
  project: 'project-1',
  members: ['member-1'],
  content: createTranslatedField('Contenu du témoignage', 'Testimonial content'),
  _id: 'testimonial-1',
}
