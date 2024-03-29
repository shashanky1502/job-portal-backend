import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './job.schema';


@Injectable()
export class JobsService {
    constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

    async create(job: Job): Promise<Job> {
        try {
            const createdJob = new this.jobModel(job);
            return await createdJob.save();
        } catch (error) {
            console.log(error);
            throw new Error('Error creating job');
        }
    }

    async findAll(): Promise<Job[]> {
        try {
            return await this.jobModel.find().exec();
        } catch (error) {
            throw new Error('Error fetching jobs');
        }
    }

    async findOne(id: string): Promise<Job> {
        try {
            return await this.jobModel.findById(id).exec();
        } catch (error) {
            throw new Error('Job not found');
        }
    }

    async update(id: string, job: Job): Promise<Job> {
        try {
            return await this.jobModel.findByIdAndUpdate(id, job, { new: true }).exec();
        } catch (error) {
            throw new Error('Error updating job');
        }
    }

    async delete(id: string): Promise<Job> {
        try {
            return await this.jobModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error('Job not found');
        }
    }
}