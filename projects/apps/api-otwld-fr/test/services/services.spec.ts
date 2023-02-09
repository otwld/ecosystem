import {app} from '../utils/app.utils';
import {
  createBaseGraphqlRequest,
  expectGraphqlData,
  expectPaginatedResponse,
  expectPaginationData
} from '../utils/graphql.utils';
import {getServiceBySlugGql, getServicesGql, getServicesPaginatedGql} from './services.gql';
import {Service1} from '../utils/fixtures/services.fixtures';
import {Service} from '@ecosystem/shared-models';

describe('Services E2E', () => {
  beforeAll(async () => {
    await app.createNestApplication()
  });
  it('should return a list of services', async () => {
    return createBaseGraphqlRequest(getServicesGql)
      .expect(expectGraphqlData<Array<Partial<Service>>>('getAllServices', [{
        _id: Service1._id,
        title: Service1.title.fr
      }]))
  });
  it('should return a list of services paginated', async () => {
    return createBaseGraphqlRequest(getServicesPaginatedGql)
      .expect((res) => expectPaginatedResponse(res, 'getServicesPaginated'))
      .expect(expectPaginationData<Service>('getServicesPaginated', [{
        _id: Service1._id,
        title: Service1.title.fr,
        icon: Service1.icon,
        description: Service1.description.fr
      }]));
  });
  it('should return a service by slug', async () => {
    return createBaseGraphqlRequest(getServiceBySlugGql)
      .expect(expectGraphqlData<Service>('getService', {
        _id: Service1._id,
        icon: Service1.icon,
        description: Service1.description.fr,
        title: Service1.title.fr,
      }));
  });
  afterAll(async () => await app.close());
});
