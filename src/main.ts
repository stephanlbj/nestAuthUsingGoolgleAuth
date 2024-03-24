import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';


async function bootstrap() {

  const secretKey = process.env.SESSION_SECRET || 'default-secret-key';


  const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('api')
// app.use(
//   session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: false,
//   }),
//);
  await app.listen(3000);
}
bootstrap();
