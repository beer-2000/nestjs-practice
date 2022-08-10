import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main.ts');

  logger.debug('HOST >>>>>>   ', process.env.HOST);
  await app.listen(3000);
}
bootstrap();
