import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  /** 두번째 파라미터 config == ./utils에 들어있음 */
  setupSwagger(app);
  /** 첫번째 파라미터는 경로 localhost:${port}/api 로 들어가면 swagger 문서 볼수 있음 */

  await app.listen(8080, () => {
    console.log('8080 server on');
  });
}
bootstrap();
