import {Client} from '../../src/app/modules/clients/models/client.model';
import {Project} from '../../src/app/modules/projects/models/project.model';
import {Service} from '../../src/app/modules/services/models/service.model';
import {Client1} from './fixtures/client.fixtures';
import {project1} from './fixtures/project.fixtures';
import {Service1} from './fixtures/services.fixtures';


interface FixtureData {
  Client: Partial<Client>[];
  Project: Partial<Project>[];
  Service: Partial<Service>[];
}

export const fixturesData: FixtureData = {
  Client: [Client1],
  Project: [project1],
  Service: [Service1]
}
