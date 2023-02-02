import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {AppModule} from '../../src/app/app.module';
import {FixturesService} from './fixtures.service';

export class App {
  moduleRef: TestingModule;
  app: INestApplication;
  private async createNestApplication() {
    this.moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      providers: [FixturesService]
    })
      .compile();
     this.app = this.moduleRef.createNestApplication();
    await this.app.init();
    const fixtureService = await this.moduleRef.resolve(FixturesService);
    await fixtureService.setupFixtures();
    global.__APP__ = this.app;
  }

  async ensureRuntime() {
    if (!this.app) {
      await this.createNestApplication();
    }
  }
}

export const app = new App();
