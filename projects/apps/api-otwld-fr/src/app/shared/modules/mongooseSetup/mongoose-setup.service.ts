import {Injectable, OnApplicationShutdown} from '@nestjs/common';
import {MongoMemoryServer} from 'mongodb-memory-server';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class MongooseSetupService implements OnApplicationShutdown {
  mongod?: MongoMemoryServer;

  constructor(private readonly configService: ConfigService) {
  }

  async selectMongoInstance() {
    if (this.configService.get('NODE_ENV') === 'test') {
      this.mongod = new MongoMemoryServer({
        instance: {
          dbName: 'apiOtwldFr',
        }
      });
      await this.mongod.start();

      return {
        uri: this.mongod.getUri() + 'apiOtwldFr'
      };
    } else {
      return {
        uri: this.configService.get('mongodb.uri'),
        retryAttempts: 3,
      }
    }
  }

  onApplicationShutdown(): void {
    if (this.mongod) {
      this.mongod.stop();
    }
  }

}
