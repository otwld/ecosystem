import { PutObjectCommandInput, S3 } from '@aws-sdk/client-s3';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReadStream } from 'fs';
import { GraphQLError } from 'graphql';
import * as Sharp from 'sharp';
import { Resource } from '../../../modules/resources/models/resource.model';
import { ResourceSizes } from '../../../modules/resources/models/size.model';
import { AppLogger } from '../logging/logging.service';

interface UploadOptions {
  mimeTypes?: string[];
}

@Injectable()
export class S3Service {
  client: S3;

  constructor(private readonly configService: ConfigService, private logger: AppLogger) {
    this.client = new S3({
      endpoint: `${this.configService.get('s3.protocol')}${this.configService.get('s3.host')}`,
      credentials: {
        accessKeyId: this.configService.get('s3.publicKey'),
        secretAccessKey: this.configService.get('s3.privateKey'),
      },
      region: this.configService.get('s3.region'),
    });
    this.logger.setContext(this.constructor.name);
  }

  private async putBlob(blobName: string, blob: Buffer, mymeType: string): Promise<boolean> {
    this.logger.verbose('putBlob');
    const params: PutObjectCommandInput = {
      Bucket: this.configService.get('s3.bucket'),
      Key: 'raw/' + blobName,
      Body: blob,
      ContentType: mymeType,
      ContentDisposition: 'inline',
      ACL: 'public-read',
    };
    await this.client.putObject(params);
    await this.client.copyObject({
      Bucket: this.configService.get('s3.bucket'),
      Key: 'pictures/' + blobName,
      CopySource: `${this.configService.get('s3.bucket')}/raw/${blobName}`,
      ACL: 'public-read',
    });
    await this.client.copyObject({
      Bucket: this.configService.get('s3.bucket'),
      Key: 'pictures/' + this.getNameFromSize(blobName, ResourceSizes.ORIGINAL),
      CopySource: `${this.configService.get('s3.bucket')}/raw/${blobName}`,
      ACL: 'public-read',
    });
    await this.client.copyObject({
      Bucket: this.configService.get('s3.bucket'),
      Key: 'pictures/' + this.getNameFromSize(blobName, ResourceSizes.MEDIUM),
      CopySource: `${this.configService.get('s3.bucket')}/raw/${blobName}`,
      ACL: 'public-read',
    });
    return true;
  }

  putStream(
    name: string,
    path: string,
    stream: ReadStream,
    mimeType: string,
    options?: UploadOptions,
  ): Promise<boolean> {
    this.logger.verbose('putStream');
    return new Promise<boolean>((resolve, reject) => {
      if (options.mimeTypes && !this.isMimeTypeValid(mimeType, options)) {
        throw new BadRequestException('Mime type not supported');
      }
      const handleError = (error) => {
        reject(error);
      };
      const chunks: Buffer[] = [];

      stream.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });

      stream.once('end', async () => {
        const fileBuffer = Buffer.concat(chunks);
        const buffer = await Sharp(fileBuffer).webp().toBuffer();
        try {
          const uploaded = await this.putBlob(`${name}.webp`, buffer, mimeType);
          resolve(uploaded);
        } catch (error) {
          handleError(new GraphQLError(error));
        }
      });

      stream.on('error', () => handleError(new GraphQLError('An error occurred during upload')));
    });
  }

  deleteObject(file: Pick<Resource, 'name' | 'bucket' | 'path'>) {
    // In the future, replace this with lambda detecting suppression of one of the files
    return this.client.deleteObjects({
      Bucket: file.bucket,
      Delete: {
        Objects: [
          {
            Key: `${file.path}/${this.getNameFromSize(file.name, ResourceSizes.ORIGINAL)}`,
          },
          {
            Key: `${file.path}/${this.getNameFromSize(file.name, ResourceSizes.MEDIUM)}`,
          },
          {
            Key: `${file.path}/${this.getNameFromSize(file.name, ResourceSizes.SMALL)}`,
          },
        ],
      },
    });
  }

  resolveFileUrl(file: Pick<Resource, 'bucket' | 'name' | 'path'>, size: ResourceSizes): string {
    this.logger.verbose('resolveFileUrl');
    return file
      ? `${this.configService.get('s3.protocol')}${this.configService.get('s3.bucket')}.${this.configService.get(
          's3.host',
        )}/${file.path}/${this.getNameFromSize(file.name, size)}`
      : '';
  }

  private getNameFromSize(fileName: string, size: ResourceSizes) {
    const [name, extension] = fileName.split('.');
    switch (size) {
      case ResourceSizes.SMALL:
        return `${name}-200.${extension}`;
      case ResourceSizes.MEDIUM:
        return `${name}-400.${extension}`;
      case ResourceSizes.ORIGINAL:
        return fileName;
    }
  }

  private isMimeTypeValid(mimeType: string, options: UploadOptions): boolean {
    this.logger.verbose('isMimeTypeValid');
    return options.mimeTypes.includes(mimeType);
  }
}
