import {Test, TestingModule} from '@nestjs/testing';
import {ExternalEngine} from '../engines/external.engine';
import {ConfigService} from '@nestjs/config';
import {ResourceService} from './resource.service';
import {get} from 'lodash';
import {AppLogger} from '../../logging/logging.service';

const config = {
  resource: {
    storageEngines: ['external'],
  }
}

describe('Resource service', () => {
  let moduleRef: TestingModule;
  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [ResourceService, ExternalEngine, {
        provide: ConfigService,
        useValue: {
          get: (key: string) => get(config, key)
        }
      }, AppLogger],
    }).compile();
  })

  it('should be defined', () => {
    const service = moduleRef.get(ResourceService);
    expect(service).toBeDefined();
  });

  it('should load engines', () => {
    const service = moduleRef.get(ResourceService);
    expect(service.engines).toHaveLength(1)
  });

  it('should throw because of unknown engine for upload', async () => {
    const service = moduleRef.get(ResourceService);
    await expect(service.createSavableResource({
      storageEngine: 'unknown' as any,
      path: '',
      fileCategory: 'image',
    })).rejects.toThrowError('Invalid storage engine');
  })

  it('should throw because of unknown config for engine', async () => {
    function createModule() {
      return Test.createTestingModule({
        controllers: [],
        providers: [ResourceService, ExternalEngine, {
          provide: ConfigService,
          useValue: {
            get: (key: string) => get({
              resource: {
                storageEngines: ['unknown'],
              }
            }, key)
          }
        }, AppLogger],
      }).compile()
    }

    await expect(createModule()).rejects.toThrowError('Resource config for unknown is not defined')

  });
  it('should throw because of unknown config for engine', async () => {
    function createModule() {
      return Test.createTestingModule({
        controllers: [],
        providers: [ResourceService, ExternalEngine, {
          provide: ConfigService,
          useValue: {
            get: (key: string) => get({
              resource: {
                storageEngines: ['unknown'],
                unknown: {}
              }
            }, key)
          }
        }, AppLogger],
      }).compile()
    }

    await expect(createModule()).rejects.toThrowError('Invalid storage engine unknown')
  });
})
