import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import {Engine} from './engine.abstract';
import {Resource, StorageEngine} from '../models/resource.model';
import {PutObjectCommandInput, S3} from '@aws-sdk/client-s3';
import {AppLogger} from '../../logging/logging.service';
import {ConfigService} from '@nestjs/config';
import * as Sharp from 'sharp';
import {join} from 'path';
import {CreateResourceDto} from '../controllers/resource.controller';
import {supportedFileTypes} from '../constants/file-types.constant';
import {v4} from 'uuid';

@Injectable()
export class S3Engine implements Engine {
  name: StorageEngine = 's3';

  private client: S3;

  constructor(private readonly configService: ConfigService, private logger: AppLogger) {
    this.client = new S3({
      endpoint: `${this.configService.get('resource.s3.protocol')}${this.configService.get('resource.s3.host')}`,
      credentials: {
        accessKeyId: this.configService.get('resource.s3.publicKey'),
        secretAccessKey: this.configService.get('resource.s3.privateKey'),
      },
      region: this.configService.get('resource.s3.region'),
    });

    this.logger.setContext(this.constructor.name);
  }

  async save(file: Express.Multer.File, resource: Resource): Promise<string> {
    this.logger.verbose('putStream');
    let buffer: Buffer;
    try {
      buffer = await Sharp(file.buffer).webp().toBuffer();
    } catch (e) {
      throw new Error('An error occurred during resize of image');
    }
    try {
      await this.putBlob(join(resource.path, resource.name), buffer, file.mimetype)
    } catch (e) {
      throw new Error('An error occurred during upload');
    }
    return;
  }

  async buildStoragePath(file: Express.Multer.File, objectStoragePath: string): Promise<string> {
    return join(this.configService.get('resource.s3.basePath'), objectStoragePath);
  }

  async delete(resource: Resource): Promise<boolean> {
    return true;
  }

  async getUrl(resource: Resource): Promise<string> {
    return resource.path;
  }

  async validateAndCreateResource(dto: CreateResourceDto, file?: Express.Multer.File): Promise<Resource> {
    if (!dto.fileCategory || !Object.keys(supportedFileTypes).includes(dto.fileCategory)) {
      throw new BadRequestException('Invalid file category');
    }
    // TODO use file type in future
    /*let extension: fileType.FileTypeResult;
    try {
      extension = await fileType.fileTypeFromBuffer(file.buffer);
    } catch (e) {
      throw new ForbiddenException('Invalid file type');
    }*/
    if (!supportedFileTypes[dto.fileCategory].includes(file.mimetype)) {
      throw new ForbiddenException('Invalid file type');
    }

    if (file.size > this.configService.get('resource.s3.maxFileSize')) {
      throw new ForbiddenException('File size is too large');
    }
    return {
      storageEngine: this.name,
      path: await this.buildStoragePath(file, dto.path),
      mimeType: 'image/webp',
      name: `${v4()}.webp`,
      originalName: file?.originalname,
      size: file?.size || 0
    }
  }

  private async putBlob(key: string, blob: Buffer, mymeType: string): Promise<boolean> {
    this.logger.verbose('putBlob');
    const params: PutObjectCommandInput = {
      Bucket: this.configService.get('resource.s3.bucket'),
      Key: key,
      Body: blob,
      ContentType: mymeType,
      ContentDisposition: 'inline',
      ACL: 'public-read',
    };
    await this.client.putObject(params);
    return true;
  }
}
