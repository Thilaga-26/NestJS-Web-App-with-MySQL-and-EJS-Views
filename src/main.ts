import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as ejs from 'ejs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(['src/students/views', 'src/teachers/views']);
  console.log(ejs);
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
