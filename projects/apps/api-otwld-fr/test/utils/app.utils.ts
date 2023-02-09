import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {AppModule} from '../../src/app/app.module';
import {FixturesService} from './fixtures.service';
import {BehaviorSubject, filter, firstValueFrom} from 'rxjs';

export class App {
  moduleRef: TestingModule;
  app: INestApplication;

  async createNestApplication() {
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
}

export const app = new App();
