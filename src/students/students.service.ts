import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}
  
  async create(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentsRepository.create(studentData);
    return this.studentsRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    Object.assign(student, studentData);
    return this.studentsRepository.save(student);
  }

  async delete(id: number): Promise<void> {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    await this.studentsRepository.delete(id);
  }
  
  async findOne(id: number): Promise<Student | undefined> {
    return this.studentsRepository.findOne({ where: { id } });
  }
}
