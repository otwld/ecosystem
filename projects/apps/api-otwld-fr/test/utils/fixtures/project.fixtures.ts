import {Project} from '../../../src/app/modules/projects/models/project.model';
import {Service1} from './services.fixtures';

export const Project1: Partial<Project> = {
  _id: 'project-1',
  templates: {
    fr: 'template fr',
    en: 'template en'
  },
  members: ['member-1'],
  slug: 'project-1',
  testimonials: [],
  services: [Service1._id],
  skills: [],
  clients: ['client-1'],
  startDate: new Date('2018-01-01T00:00:00.000Z'),
  title: {
    fr: 'project 1 fr',
    en: 'project 1 en'
  },
}
export const Project2: Partial<Project> = {
  _id: 'project-2',
  templates: {
    fr: 'template fr',
    en: 'template en'
  },
  members: ['member-1'],
  slug: 'project-2',
  testimonials: [],
  services: [Service1._id],
  skills: [],
  clients: ['client-1'],
  startDate: new Date('2019-01-01T00:00:00.000Z'),
  title: {
    fr: 'project 2 fr',
    en: 'project 2 en'
  },
}

export const Project3: Partial<Project> = {
  _id: 'project-3',
  templates: {
    fr: 'template fr',
    en: 'template en'
  },
  members: ['member-1'],
  slug: 'project-3',
  testimonials: [],
  services: [],
  skills: [],
  clients: ['client-1'],
  startDate: new Date('2019-01-01T00:00:00.000Z'),
  title: {
    fr: 'project 2 fr',
    en: 'project 2 en'
  },
}
