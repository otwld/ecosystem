import {Injectable, Logger} from '@nestjs/common';
import {CreateResourceDto} from '../controllers/resource.controller';
import {Resource} from '../models/resource.model';
import {ConfigService} from '@nestjs/config';
import {ResourceConfigs} from '../models/config.model';
import {Engine} from '../engines/engine.abstract';
import {ModuleRef} from '@nestjs/core';
import {S3Engine} from '../engines/s3.engine';
import {ExternalEngine} from '../engines/external.engine';
import {AppLogger} from '../../logging/logging.service';

@Injectable()
export class ResourceService {
  engines: Engine[] = [];

  constructor(private readonly configService: ConfigService, private moduleRef: ModuleRef, private logger: AppLogger) {
    this.logger.setContext(ResourceService.name);
    this.verifyConfig();
    this.loadEngines();
  }

  async createSavableResource(body: CreateResourceDto, file?: Express.Multer.File) {
    const storageEngine = this.engines.find((engine) => engine.name === body.storageEngine);
    if (!storageEngine) {
      throw new Error('Invalid storage engine');
    }
    const resource: Resource = await storageEngine.validateAndCreateResource(body, file);
    await storageEngine.save(file, resource);
    return resource;
  }

  getResourceUrl(resource: Resource) {
    const storageEngine = this.engines.find((engine) => engine.name === resource.storageEngine);
    if (!storageEngine) {
      throw new Error('Invalid storage engine');
    }
    return storageEngine.getUrl(resource);
  }

  private verifyConfig() {
    const config: ResourceConfigs = this.configService.get('resource');
    if (!config) {
      throw new Error('Resource config is not defined');
    }
    for (const engine of config.storageEngines) {
      if (!config[engine] && engine !== 'external') {
        throw new Error(`Resource config for ${engine} is not defined`);
      }
    }
  }

  private loadEngines() {
    for (const engine of this.configService.get('resource.storageEngines')) {
      switch (engine) {
        case 's3':
          this.engines.push(this.moduleRef.get(S3Engine));
          this.logger.verbose('S3 engine loaded');
          break;
        case 'external':
          this.engines.push(this.moduleRef.get(ExternalEngine));
          this.logger.verbose('External engine loaded')
          break;
        default:
          throw new Error(`Invalid storage engine ${engine}`);
      }
    }
  }
}
