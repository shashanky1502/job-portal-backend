import { Controller, Post, Body, Get, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from './email.schema';

@Controller('email-registration')
export class EmailRegistrationController {
    constructor(@InjectModel('Email') private readonly emailModel: Model<Email>) {}

    @Get()
    async getEmails(): Promise<{ emails: Email[] }> {
        const emails = await this.emailModel.find().exec();
        return { emails };
    }

    @Post()
    async registerEmail(@Body('address') address: string): Promise<{ message: string }> {
        
        const existingEmail = await this.emailModel.findOne({ address }).exec();
        if (existingEmail) {
            throw new HttpException('Email already exists', HttpStatus.CONFLICT);
        }

        try {
            const newEmail = new this.emailModel({ address });
            await newEmail.save();
            return { message: 'Email registered successfully' };
        } catch (error) {
            throw new HttpException('Failed to register email', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
