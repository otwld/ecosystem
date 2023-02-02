import {Client} from '../../src/app/modules/clients/models/client.model';
import {Project} from '../../src/app/modules/projects/models/project.model';

export const project1: Partial<Project> = {
  _id: 'project-1',
  templates: {
    fr: 'template fr',
    en: 'template en'
  },
  members: [],
  slug: 'project-1',
  testimonials: [],
  services: [],
  skills: [],
  clients: ['client-1'],
  startDate: new Date('2019-01-01T00:00:00.000Z'),
  title: {
    fr: 'project 1 fr',
    en: 'project 1 en'
  },
}

interface FixtureData {
  Client: Partial<Client>[];
  Project: Partial<Project>[];
}

export const fixturesData: FixtureData = {
  Client: [{
    _id: 'client-1',
    name: {
      fr: 'client 1 fr',
      en: 'client 1 en'
    }
  }],
  Project: [project1]
}
