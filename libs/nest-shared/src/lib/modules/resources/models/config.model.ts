import {StorageEngine} from './resource.model';

export interface S3Config {
  host: string;
  publicKey: string;
  privateKey: string;
  region: string;
  protocol: string;
  basePath: string;
  bucket: string;
  maxFileSize: number;
}

export interface LocalConfig {
  basePath: string;
}

export interface ResourceConfigs {
  s3?: S3Config;
  local?: LocalConfig;
  storageEngines: StorageEngine[];
}
