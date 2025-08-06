import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) || 4000;
  await app.listen(port, '0.0.0.0');
  const logger = new Logger('bootstrap');
  logger.log(`Listening on ${await app.getUrl()}`);
}

bootstrap().catch((e) => console.log(`Error al iniciar la aplicacion: ${e}`));