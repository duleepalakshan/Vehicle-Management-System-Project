import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- ENABLE CORS HERE ---
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  // -------------------------

  await app.listen(3002);
}
bootstrap();
