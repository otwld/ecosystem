import { registerAs } from '@nestjs/config';

export default registerAs('s3', () => ({
  host: process.env.S3_HOST,
  protocol: process.env.S3_PROTOCOL,
  bucket: process.env.S3_BUCKET,
  region: process.env.S3_REGION,
  publicKey: process.env.S3_PULIC_KEY,
  privateKey: process.env.S3_PRIVATE_KEY,
}));
