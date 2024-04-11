import { Controller,Get,Render,Post,Body,Res,Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from '../entities/teacher.entity';
import { Response } from 'express';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}

    @Get()
    @Render('teacher-homepage') // Render the teacher homepage view
    async findAll(): Promise<{ teachers: Teacher[] }> {
        const teachers = await this.teachersService.findAll();
        return { teachers };
    }
    
  @Get('add')
  @Render('add-teacher') // Render the add student view
  addStudentPage() {
    return {};
  }
  
  @Post()
  async create(@Body() studentData: Teacher, @Res() res: Response): Promise<void> {
    await this.teachersService.create(studentData);
    res.redirect('/teachers/success');
  }

  @Get('success')
  @Render('success-teacher') // Render the success view
  successPage() {
    return {};
  }

  @Get('edit/:id')
    @Render('edit-teacher')
    async edit(@Param('id') id: number): Promise<{ teacher: Teacher }> {
        const teacher = await this.teachersService.findOne(id);
        return { teacher };
    }

    @Post(':id')
    async updateTeacher(@Param('id') id: number, @Body() teacherData: Partial<Teacher>, @Res() res: Response): Promise<void> {
        await this.teachersService.update(id, teacherData);
        res.redirect('/teachers/success');
    }

    @Get('delete/:id')
    @Render('delete-teache')
    async delete(@Param('id') id: number): Promise<{ teacher: Teacher }> {
        const teacher = await this.teachersService.findOne(id);
        return { teacher };
    }

    @Post('delete/:id')
    async deleteTeacher(@Param('id') id: number, @Res() res: Response): Promise<void> {
        await this.teachersService.delete(id);
        res.redirect('/teachers/success');
    }
}
