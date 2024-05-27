import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// function to bootstrap the app
async function bootstrap() {
  // create the app
  const app = await NestFactory.create(AppModule);
  // listen on port 3000
  await app.listen(3000);
  console.log('App is running on port 3000');
}

// run the app
bootstrap();
