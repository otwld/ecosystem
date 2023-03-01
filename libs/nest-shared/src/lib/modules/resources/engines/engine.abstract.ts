import {Resource, StorageEngine} from '../models/resource.model';
import {CreateResourceDto} from '../controllers/resource.controller';

export abstract class Engine {
  name: StorageEngine;
  abstract save(file: Express.Multer.File, resource: Resource): Promise<string>;
  abstract buildStoragePath(file: Express.Multer.File, objectStoragePath: string): Promise<string>;

  abstract validateAndCreateResource(dto: CreateResourceDto, file?: Express.Multer.File): Promise<Resource>;

  abstract delete(resource: Resource): Promise<boolean>;

  abstract getUrl(resource: Resource): Promise<string>;
}
