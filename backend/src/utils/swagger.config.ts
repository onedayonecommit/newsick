import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// export const config = new DocumentBuilder()
//   .setTitle('newsic')
//   .setDescription('docs for each api')
//   .setVersion('v1.0.0')
//   .addTag('newsic api')
//   .build();
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('NEWSIC-DOCS')
    .setDescription('docs for each api')
    .setVersion('v1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
