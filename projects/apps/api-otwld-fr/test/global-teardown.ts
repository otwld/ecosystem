import {app} from './utils/app.utils';

afterAll(async () => {
  await app.app.close();
})
