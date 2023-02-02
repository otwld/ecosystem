import {ConfigService} from '@nestjs/config';
import {MongoMemoryServer} from 'mongodb-memory-server';
import {MongooseModuleFactoryOptions} from '@nestjs/mongoose';

export async function getMongoInstanceFromEnv(conf: ConfigService): Promise<MongooseModuleFactoryOptions> {
  if (conf.get('NODE_ENV') === 'test') {
    const mongod = new MongoMemoryServer({
      instance: {
        dbName: 'apiOtwldFr',
      }
    });
    await mongod.start();
    return {
      uri: mongod.getUri() + 'apiOtwldFr'
    };
  } else {
    return {
      uri: conf.get('mongodb.uri'),
      retryAttempts: 3,
    }
  }
}
