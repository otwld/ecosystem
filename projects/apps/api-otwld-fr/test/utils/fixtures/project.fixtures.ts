import {Project} from '../../../src/app/modules/projects/models/project.model';
import {Service1} from './services.fixtures';

export const project1: Partial<Project> = {
  _id: 'project-1',
  templates: {
    fr: 'template fr',
    en: 'template en'
  },
  members: [],
  slug: 'project-1',
  testimonials: [],
  services: [Service1._id],
  skills: [],
  clients: ['client-1'],
  startDate: new Date('2019-01-01T00:00:00.000Z'),
  title: {
    fr: 'project 1 fr',
    en: 'project 1 en'
  },
}
