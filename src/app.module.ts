import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// module
@Module({
  controllers: [
    AppController,
  ],
})

// App module
export class AppModule {}
