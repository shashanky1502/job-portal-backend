import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    company: string;

    @Prop({ required: true })
    companyLogo: string;

    @Prop({ })
    Role: string;

    @Prop({  })
    jobDescription: string;

    @Prop({  })   
    requirements: string;

    @Prop({ required: true })
    salary: string;

    @Prop()
    MinExperience: string;

    @Prop()
    Eligibility: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    WorkType: string;

    @Prop({ required: true })
    applyLink: string;

    @Prop({ required: true, default: Date.now })
    postedDate: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job); 


//in the body you need to give the following json data
// {
//     "title": "Software Developer",
//     "company": "Google",
//     "companyLogo": "https://www.google.com",
//     "jobDescription": "Software Developer",
//     "requirements": "B.Tech",
//     "salary": 50000,
//     "MinExperience": "2 years",
//     "Eligibility": "2024 Batch",
//     "location": "Hyderabad",
//     "WorkType": "Full Time",
//     "applyLink": "https://www.google.com",
//     "postedDate": "2021-09-21"
// }
