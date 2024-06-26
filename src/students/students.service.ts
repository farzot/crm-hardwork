import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private readonly studentRepo: Repository<Student>){}
  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.save(createStudentDto);
  }

  async findAll() {
    return this.studentRepo.find();
  }

  async findOne(id: number) {
    return this.studentRepo.findOne({where: {id: id}});
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepo.update({id: id}, updateStudentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.studentRepo.delete({id: id});
    return id;
  }
}
