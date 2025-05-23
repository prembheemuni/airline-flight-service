import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerConfig } from './config/server.config';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new ExceptionsHandler());
  await app.listen(ServerConfig.APP_PORT);
}
bootstrap();
