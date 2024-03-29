import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Email, EmailSchema } from './email.schema';
import { EmailRegistrationController } from './email-registration.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema,
    }])
  ],
  controllers: [EmailRegistrationController],
})
export class EmailRegistrationModule {}