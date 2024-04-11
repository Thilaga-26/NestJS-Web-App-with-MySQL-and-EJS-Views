import { Controller, Get, Post, Body, Param, Delete, Res, Render } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from '../entities/student.entity';
import { Response } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @Render('homepage') // Render the homepage view
  async findAll(): Promise<{ students: Student[] }> {
    const students = await this.studentsService.findAll();
    return { students };
  }

  @Get('add')
  @Render('add-student')
  addStudentPage() {}

/*
  @Get('add')
  @Render('add-student') // Render the add student view
  addStudentPage() {
    return {};
  }
*/  
  @Post()
  async create(@Body() studentData: Student, @Res() res: Response): Promise<void> {
    await this.studentsService.create(studentData);
    res.redirect('/students');
  }

  @Get('success')
  @Render('success') // Render the success view
  successPage() {
    return {};
  }

  @Get('edit/:id')
  @Render('edit')
  async edit(@Param('id') id: number): Promise<{ student: Student }> {
    const student = await this.studentsService.findOne(id);
    return { student };
  }

  @Post(':id')
  async updateStudent(@Param('id') id: number, @Body() studentData: Partial<Student>, @Res() res: Response): Promise<void> {
    await this.studentsService.update(id, studentData);
    res.redirect('/students/success');
  }

  @Get('delete/:id')
  @Render('delete')
  async delete(@Param('id') id: number): Promise<{ student: Student }> {
    const student = await this.studentsService.findOne(id);
    return { student };
  }

  @Post('delete/:id')
  async deleteStudent(@Param('id') id: number, @Res() res: Response): Promise<void> {
    await this.studentsService.delete(id);
    res.redirect('/students/success');
  }
  }
