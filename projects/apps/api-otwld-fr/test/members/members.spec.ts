import {getMemberFullGql, getMemberLightGql} from './members.gql';
import {HeaderLanguage} from '../../src/app/shared/modules/language/enums/language.enum';
import {Member} from '@ecosystem/shared-models';
import {app} from '../utils/app.utils';
import {Member1} from '../utils/fixtures/member.fixtures';
import {DefaultGraphqlRequest} from '../utils/requests/graphql-request.utils';
import {Skill1} from '../utils/fixtures/skill.fixtures';
import {formatDistance} from 'date-fns';
import {fr} from 'date-fns/locale';
import {WorkMode1} from '../utils/fixtures/workMode.fixtures';

describe('Members E2E', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  })
  it('should get a light member with translation', async () =>
    DefaultGraphqlRequest.runTest<Member>(getMemberLightGql, {defaultLanguage: HeaderLanguage.EN}, {
      _id: Member1._id,
      firstName: Member1.firstName,
      jobTitle: Member1.jobTitle.en,
    })
  );
  it('should get a member with all resolvers', async () =>
    DefaultGraphqlRequest.runTest<Member>(getMemberFullGql, {debug: false}, {
      _id: Member1._id,
      firstName: Member1.firstName,
      jobTitle: Member1.jobTitle.fr,
      socials: Member1.socials,
      location: {
        city: Member1.location.city.fr,
        country: Member1.location.country.fr,
        street: Member1.location.street,
        fullLocation: `${Member1.location.city.fr}, ${Member1.location.country.fr}`
      },
      projects: {
        edges: [{
          node: {_id: Member1.projects[0]}
        }]
      },
      services: [{
        _id: Member1.services[0]
      }],
      skills: [{
        skill: {
          _id: Skill1._id,
          name: Skill1.name.fr,
        },
        level: Member1.skills[0].level,
        yearOfExperience: formatDistance(Member1.skills[0].startDate,
          new Date(),
          {includeSeconds: true, addSuffix: false, locale: fr})
      }],
      workModes: [{
        workMode: {
          _id: WorkMode1._id,
          name: WorkMode1.name.fr
        },
        description: Member1.workModes[0].description.fr
      }]
    })
  );
  afterAll(async () => {
    await app.close();
  })
});
