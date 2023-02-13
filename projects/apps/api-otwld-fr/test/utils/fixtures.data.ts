import {Client} from '../../src/app/modules/clients/models/client.model';
import {Project} from '../../src/app/modules/projects/models/project.model';
import {Service} from '../../src/app/modules/services/models/service.model';
import {Client1} from './fixtures/client.fixtures';
import {Project1} from './fixtures/project.fixtures';
import {Service1} from './fixtures/services.fixtures';
import {Member1} from './fixtures/member.fixtures';
import {Member} from '../../src/app/modules/members/models/member.model';
import {Skill} from '../../src/app/modules/skills/models/skill.model';
import {Skill1} from './fixtures/skill.fixtures';
import {WorkMode1} from './fixtures/workMode.fixtures';
import { WorkMode } from '../../src/app/modules/workModes/models/workMode.model';


interface FixtureData {
  Client: Partial<Client>[];
  Project: Partial<Project>[];
  Service: Partial<Service>[];
  Member: Partial<Member>[];
  Skill: Partial<Skill>[];
  WorkMode: Partial<WorkMode>[];
}

export const fixturesData: FixtureData = {
  Client: [Client1],
  Project: [Project1],
  Service: [Service1],
  Member: [Member1],
  Skill: [Skill1],
  WorkMode: [WorkMode1],
}
