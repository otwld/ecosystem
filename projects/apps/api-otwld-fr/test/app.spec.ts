import * as request from 'supertest';
import {app} from './utils/app.utils';

describe('App', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  });
  it(`/POST graphql`, () => {
    return request(app.app.getHttpServer())
      .post('/graphql')
      .expect(400)
  });
  afterAll(async () => await app.close());
});
