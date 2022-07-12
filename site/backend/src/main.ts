import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(3333, () => {
    console.log('Data backend has ben started in port: 3333');
  });
}
bootstrap();
