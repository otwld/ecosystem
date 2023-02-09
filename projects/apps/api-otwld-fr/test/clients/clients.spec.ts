import {getClientsQuery} from './clients.gql';
import {createBaseGraphqlRequest, expectNotGraphqlError} from '../utils/graphql.utils';
import {app} from '../utils/app.utils';
import {HeaderLanguage} from '../../src/app/shared/modules/language/enums/language.enum';

describe('clients E2E', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  })
  it('should return a list of clients', async () => {
    return createBaseGraphqlRequest(getClientsQuery).expect(expectNotGraphqlError).expect({
      data: {
        getAllClients: [{
          _id: 'client-1',
          name: 'client 1 fr'
        }]
      }
    });
  });
  it('should translate key from header', async () => {
    return createBaseGraphqlRequest(getClientsQuery, HeaderLanguage.EN).expect(expectNotGraphqlError).expect({
      data: {
        getAllClients: [{
          _id: 'client-1',
          name: 'client 1 en'
        }]
      }
    });
  });
  afterAll(async () => await app.close());

});
