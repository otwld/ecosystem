import * as request from 'supertest';
import {app} from './utils/app.utils';
import {ErrorGraphqlRequest} from './utils/requests/graphql-request.utils';
import {getMemberLightGql} from './members/members.gql';

describe('App', () => {
  ;
  it(`/POST graphql`, () => {
    return request(app.app.getHttpServer())
      .post('/graphql')
      .expect(400)
  });
  it('/POST graphql without language',
    async () => ErrorGraphqlRequest.runTest(getMemberLightGql,
      {expectError: true, debug: false, defaultLanguage: 'ze'},
      [{
        message: 'Language is invalid',
      }]));

});
