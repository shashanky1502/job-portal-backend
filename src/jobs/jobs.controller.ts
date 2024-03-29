import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.schema';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {}

    @Get()
    async findAll(): Promise<Job[]> {
        try {
            return await this.jobsService.findAll();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Error fetching jobs',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id') 
    async findOne(@Param('id') id: string): Promise<Job> { 
        try {
            return await this.jobsService.findOne(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Job not found',
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() job: Job): Promise<Job> {
        try {
            return await this.jobsService.update(id, job);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Error updating job',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() job: Job): Promise<Job> {
        try {
            return await this.jobsService.create(job);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Error creating job',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        try {
            await this.jobsService.delete(id);
            return { message: 'Job deleted successfully' };
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Job not found',
            }, HttpStatus.NOT_FOUND);
        }
    }
}