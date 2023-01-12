/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';
// TODO: remove this line when NX bug is fixed.
import "@nestjs/platform-express";
import { AppModule } from './app/app.module';
import {AppLogger} from './app/shared/modules/logging/logging.service';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3333;
  const logger = new AppLogger(app.get(ConfigService));

  app.useLogger(logger);
  await app.listen(port);
  logger.nestApplicationInitiated();

}

bootstrap();
