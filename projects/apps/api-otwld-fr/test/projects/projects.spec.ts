import {app} from '../utils/app.utils';
import {getFullProjectBySlugGql, getProjectBySlugGql, getProjectsGql} from './projects.gql';
import {Project1} from '../utils/fixtures/project.fixtures';
import {Project} from '@ecosystem/shared-models';
import {Service1} from '../utils/fixtures/services.fixtures';
import {Client1} from '../utils/fixtures/client.fixtures';
import {fr} from 'date-fns/locale';
import {format} from 'date-fns';
import {DefaultGraphqlRequest, PaginatedGraphqlRequest} from '../utils/requests/graphql-request.utils';

describe('projects E2E', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  });
  it('should return a list of projects', async () =>
    PaginatedGraphqlRequest.runTest<Project[]>(getProjectsGql, {}, [{
      _id: Project1._id
    }])
  );
  it('should return project by slug', async () =>
    DefaultGraphqlRequest.runTest<Project>(getProjectBySlugGql, {}, {
      _id: Project1._id
    })
  );


  it('should return project by slug with resolvers', async () =>
    DefaultGraphqlRequest.runTest<Project>(getFullProjectBySlugGql, {}, {
      _id: Project1._id,
      startDateLabel: format(Project1.startDate, 'MMM dd, yyyy', {locale: fr}),
      endDateLabel: null,
      services: [{
        _id: Service1._id,
        title: Service1.title.fr,
        slug: Service1.slug,
      }],
      clients: [{
        _id: Client1._id,
        name: Client1.name.fr,
      }],
    })
  );
  afterAll(async () => await app.close());
});
