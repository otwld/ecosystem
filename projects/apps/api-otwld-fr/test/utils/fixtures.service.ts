import {Injectable} from '@nestjs/common';
import {InjectConnection} from '@nestjs/mongoose';
import {Connection} from 'mongoose';
import {fixturesData} from './fixtures.data';

@Injectable()
export class FixturesService {
  constructor(@InjectConnection() private readonly connection: Connection) {
  }

  async setupFixtures() {
    for (const collection of Object.keys(fixturesData)) {
      if (this.connection.models[collection]) {
        await this.connection.models[collection].insertMany(fixturesData[collection]);
      } else {
        throw new Error(`Collection ${collection} not found`);
      }
    }
  }
}
