import {app} from './utils/app.utils';

afterAll(async () => {
  await app.close();
  await app.mongoDbInstance.stop();
})

beforeAll(async () => {
  await app.createNestApplication();
})
