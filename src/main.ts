import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Defeni el pipe de forma global
  app.useGlobalPipes(
    new ValidationPipe({
      //solo deja pasar los dotos definidos en el DTO
      whitelist: true,
      // envia error con los campos que no existen en el DTO, para que no envie
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
