import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail } from 'class-validator';

@Schema()
export class Email extends Document {
  @Prop({ required: true, unique: true })
  @IsEmail()
  address: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);


//payload
// {
//     "address": "SOME_EMAIL_ADDRESS"
// }