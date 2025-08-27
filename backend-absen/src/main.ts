import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Body parser limit
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // CORS config
  app.enableCors({
    origin: '*', // ganti sesuai domain frontend kalau production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Port ambil dari .env atau fallback ke 3333
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;

  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
