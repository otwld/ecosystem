import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class MongooseSetupService {
  constructor(private readonly configService: ConfigService) {
  }

  async selectMongoInstance() {
    if (this.configService.get('NODE_ENV') === 'test') {
      return {
        uri: this.configService.get('mongodb.uri')
      };
    } else {
      return {
        uri: this.configService.get('mongodb.uri'),
        retryAttempts: 3,
      }
    }
  }
}
