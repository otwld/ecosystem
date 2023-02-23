import * as request from 'supertest';
import {app} from '../utils/app.utils';

describe('Health e2e', () => {
  it('should return an healthy response', function () {
    return request(app.app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({
        status: 'ok',
        info: { mongo: { status: 'up' }, google: { status: 'up' } },
        error: {},
        details: { mongo: { status: 'up' }, google: { status: 'up' } }
      });
  });
})
