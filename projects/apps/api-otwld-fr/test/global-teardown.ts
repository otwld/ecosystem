import {app} from './utils/app.utils';
import {afterAll} from '@jest/globals';

afterAll(async () => {
  await app.app.close();
})
