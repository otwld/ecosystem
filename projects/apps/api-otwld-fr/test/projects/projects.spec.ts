import {app} from '../utils/app.utils';
import {
  createBaseGraphqlRequest,
  expectGraphqlData,
  expectNotGraphqlError,
  expectPaginatedResponse,
  expectPaginationData
} from '../utils/graphql.utils';
import {getFullProjectBySlugGql, getProjectBySlugGql, getProjectsGql} from './projects.gql';
import {project1} from '../utils/fixtures/project.fixtures';
import {Project} from '@ecosystem/shared-models';
import {Service1} from '../utils/fixtures/services.fixtures';
import {Client1} from '../utils/fixtures/client.fixtures';
import {enUS, fr} from 'date-fns/locale';
import {format} from 'date-fns';

describe('projects E2E', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  });

  it('should return a list of projects', async () => {
    return createBaseGraphqlRequest(getProjectsGql)
      .expect(expectNotGraphqlError)
      .expect((res) => expectPaginatedResponse(res, 'getProjects'))
      .expect(expectPaginationData('getProjects', [{_id: project1._id}]))
  });
  it('should return project by slug', async () => {
    return createBaseGraphqlRequest(getProjectBySlugGql)
      .expect(expectNotGraphqlError)
      .expect({
        data: {
          getProjectBySlug: {
            _id: project1._id
          }
        }
      })
  });
  it('should return project by slug with resolvers', async () => {
    return createBaseGraphqlRequest(getFullProjectBySlugGql)
      .expect(expectNotGraphqlError)
      .expect(expectGraphqlData<Project>('getProjectBySlug', {
          _id: project1._id,
          startDateLabel: format(project1.startDate, 'MMM dd, yyyy', {locale: fr}),
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
      )
  });
  afterAll(async () => await app.close());

});
