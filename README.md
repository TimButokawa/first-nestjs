### First NestJS
Messing around with NestJS

#### Some Notes

When creating modules and controllers in NestJS, it's important to follow certain conventions:

- **Module Naming**: Modules should be named using PascalCase and end with the word "Module". For example, `UserModule`, `AuthModule`, etc.

- **Controller Naming**: Controllers should be named using PascalCase and end with the word "Controller". For example, `UserController`, `AuthController`, etc.

- **File Naming**: The file names for modules and controllers should match their respective class names. For example, the `UserModule` class should be defined in a file named `user.module.ts`, and the `UserController` class should be defined in a file named `user.controller.ts`.

Remember to import and export modules correctly in the `app.module.ts` file to make them available to the application.

### Controller Get Routes and Applying Path to Methods

When defining GET routes in a controller, you can use the `@Get()` decorator to specify the path for the route. For example:

```ts
// applies /users to all get in the controller
@Controller('/users')
export class UserController {
  @Get()
  getAllUsers() {
    // Logic to get all users
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    // Logic to get user by ID
  }
}
```

```zsh
npm install
npx ts-node-dev src/main.ts
```
