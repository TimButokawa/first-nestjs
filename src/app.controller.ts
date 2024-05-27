import { Controller, Get } from '@nestjs/common';

// App Controller
// Defining a path here will apply it to all routes in the controller
// For example, the path here is '/app' so all routes in this controller will be prefixed with '/app'
// e.g. '/app/hello-world'
@Controller('/app')
export class AppController {
  // /app/hello-world
  @Get('/hello-world')
  getRootRoute() {
    return 'Hello World';
  }
  // /app/hello
  @Get('/hello')
  getHelloRoute() {
    return 'Hello';
  }
}
