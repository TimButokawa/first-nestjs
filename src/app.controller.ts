import { Controller, Get } from '@nestjs/common';

// App Controller
@Controller()
export class AppController {
  // Get methods
  @Get()
  getRootRoute() {
    return 'Hello World';
  }
}
