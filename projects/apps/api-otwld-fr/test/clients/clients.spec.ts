import {getClientsQuery} from './clients.gql';
import {app} from '../utils/app.utils';
import {HeaderLanguage} from '../../src/app/shared/modules/language/enums/language.enum';
import {Client} from '@ecosystem/shared-models';
import {Client1} from '../utils/fixtures/client.fixtures';
import {DefaultGraphqlRequest} from '../utils/requests/graphql-request.utils';


describe('clients E2E', () => {

  it('should return a list of clients', async () =>
    DefaultGraphqlRequest.runTest<Client[]>(getClientsQuery, {}, [{
      _id: Client1._id,
      name: Client1.name.fr
    }])
  );

  it('should translate key from header', async () =>
    DefaultGraphqlRequest.runTest<Client[]>(getClientsQuery, {defaultLanguage: HeaderLanguage.EN}, [{
      _id: Client1._id,
      name: Client1.name.en
    }])
  );
});
