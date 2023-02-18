import {app} from '../utils/app.utils';
import {getServiceBySlugGql, getServicesGql, getServicesPaginatedGql} from './services.gql';
import {Service1} from '../utils/fixtures/services.fixtures';
import {Service} from '@ecosystem/shared-models';
import {DefaultGraphqlRequest, PaginatedGraphqlRequest} from '../utils/requests/graphql-request.utils';

describe('Services E2E', () => {
  /*beforeAll(async () => {
    await app.createNestApplication()
  });*/
  it('should return a list of services', async () =>
    DefaultGraphqlRequest.runTest<Service[]>(getServicesGql, {}, [{
      _id: Service1._id,
      title: Service1.title.fr
    }]));
  it('should return a list of services paginated', async () =>
    PaginatedGraphqlRequest.runTest<Service[]>(getServicesPaginatedGql, {}, [{
      _id: Service1._id,
      title: Service1.title.fr,
      icon: Service1.icon,
      description: Service1.description.fr
    }]));
  it('should return a service by slug', async () =>
    DefaultGraphqlRequest.runTest<Service>(getServiceBySlugGql, {}, {
      _id: Service1._id,
      icon: Service1.icon,
      description: Service1.description.fr,
      title: Service1.title.fr,
    }));
  /*afterAll(async () => await app.close());*/
});
