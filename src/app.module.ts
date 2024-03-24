import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GoogleStrategy } from './auth/utils/GoogleStrategy';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true,
    //envFilePath: "./.env"
  }),
    EventEmitterModule.forRoot(),  AuthModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
