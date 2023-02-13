import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(8080);

  // setInterval(() => {
  //   if (Math.floor(new Date().getTime() / 1000) % 86400 == 0) {
  //   }
  // }, 1000);
}
bootstrap();
