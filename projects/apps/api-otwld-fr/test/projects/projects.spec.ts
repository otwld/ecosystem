import {app} from '../utils/app.utils';
import {
  createBaseGraphqlRequest,
  expectNotGraphqlError,
  expectPaginatedResponse,
  expectPaginationData
} from '../utils/graphql.utils';
import {getProjectBySlugGql, getProjectsGql} from './projects.gql';
import {project1} from '../utils/fixtures.data';

describe('projects E2E', () => {
  beforeAll(async () => {
    await app.ensureRuntime();
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
});
