import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher)
        private teachersRepository: Repository<Teacher>,
      ) {}

      async create(teacherData: Partial<Teacher>): Promise<Teacher> {
        const teacher = this.teachersRepository.create(teacherData);
        return this.teachersRepository.save(teacher);
      }
    
      async findAll(): Promise<Teacher[]> {
        return this.teachersRepository.find();
      }

      async update(id: number, teacherData: Partial<Teacher>): Promise<Teacher> {
        const teacher = await this.teachersRepository.findOne({ where: { id } });
        if (!teacher) {
            throw new Error(`Teacher with ID ${id} not found`);
        }
        Object.assign(teacher, teacherData);
        return this.teachersRepository.save(teacher);
    }
    
    async delete(id: number): Promise<void> {
        const teacher = await this.teachersRepository.findOne({ where: { id } });
        if (!teacher) {
            throw new Error(`Teacher with ID ${id} not found`);
        }
        await this.teachersRepository.delete(id);
    }
    
    async findOne(id: number): Promise<Teacher | undefined> {
        return this.teachersRepository.findOne({ where: { id } });
    }
    
    
}
