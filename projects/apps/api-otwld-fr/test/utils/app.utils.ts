import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {AppModule} from '../../src/app/app.module';
import {FixturesService} from './fixtures.service';
import {MongoMemoryServer} from 'mongodb-memory-server';

export class App {
  moduleRef: TestingModule;
  app: INestApplication;
  mongoDbInstance: MongoMemoryServer;

  async createNestApplication() {
    await this.createMongoDbInstance();
    this.moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      providers: [FixturesService]
    })
      .compile();
    this.app = this.moduleRef.createNestApplication();
    await this.app.init();
    const fixtureService = await this.moduleRef.resolve(FixturesService);
    await fixtureService.setupFixtures();
  }

  close() {
    return this.app.close();
  }

  private async createMongoDbInstance() {
    this.mongoDbInstance = new MongoMemoryServer({
      instance: {
        dbName: 'apiOtwldFr',
      }
    });
    await this.mongoDbInstance.start();
    process.env.MONGODB_URI = this.mongoDbInstance.getUri();
  }
}

export const app = new App();
