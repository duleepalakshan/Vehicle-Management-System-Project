import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import { IoAdapter } from '@nestjs/platform-socket.io';
  import { NotificationGateway } from './notification/notification.gateway';
  import { NestExpressApplication } from '@nestjs/platform-express';
  import * as dotenv from 'dotenv';

  
  dotenv.config(); // Load environment variables (even if .env file not present)
  
  async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useWebSocketAdapter(new IoAdapter(app));
     const port = process.env.PORT || 3002
     await app.listen(port);
    console.log('Application is running on: http://localhost:3002');
  }
  bootstrap();