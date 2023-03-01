import {BadRequestException, Injectable} from '@nestjs/common';
import {Engine} from './engine.abstract';
import {Resource, StorageEngine} from '../models/resource.model';
import {CreateResourceDto} from '../controllers/resource.controller';

@Injectable()
export class ExternalEngine implements Engine {
  name: StorageEngine = 'external';

  buildStoragePath(file: Express.Multer.File, objectStoragePath: string): Promise<string> {
    return Promise.resolve(objectStoragePath);
  }

  delete(resource: Resource): Promise<boolean> {
    return Promise.resolve(true);
  }

  async getUrl(resource: Resource): Promise<string> {
    return resource.path;
  }

  async save(file: Express.Multer.File, resource: Resource): Promise<string> {
    return resource.path;
  }

  async validateAndCreateResource(dto: CreateResourceDto, file?: Express.Multer.File): Promise<Resource> {
    if (!dto.url) {
      throw new BadRequestException('Url is required');
    }
    return {
      path: dto.url,
      name: dto.url.split('/').pop(),
      storageEngine: this.name,
    }
  }

}
