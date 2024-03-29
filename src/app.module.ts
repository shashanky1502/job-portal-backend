import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { EmailRegistrationModule } from './email-registration/email-registration.module';

@Module({
  imports: [ MongooseModule.forRoot(process.env.MONGO_URI), JobsModule, ConfigModule.forRoot(), EmailRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
