import * as request from 'supertest';
import {app} from '../utils/app.utils';
import {ConfigService} from '@nestjs/config';

describe('Ttl e2e', () => {
  it('should stop last request because of the ttl', () => {
    const ops = [];
    const configService = app.app.get(ConfigService);
    const limitBeforeTtl = configService.get('ttl.limit');
    for (let i = 0; i <= limitBeforeTtl; i++) {
      ops.push(request(app.app.getHttpServer()).get('/health').expect(i === limitBeforeTtl ? 429 : 200));
    }
    return Promise.all(ops);
  });
})
