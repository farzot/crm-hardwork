import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentLesson } from './entities/student_lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentLessonService {
  constructor(@InjectRepository(StudentLesson) private readonly studentRepo: Repository<StudentLesson>) {  }
  create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentRepo.save(createStudentLessonDto);
  }

  async findAll() {
    return this.studentRepo.find();
  }

 async  findOne(id: number) {
    return this.studentRepo.findOne({where: {id: id}});
  }

 async  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
   await this.studentRepo.update({id: id}, updateStudentLessonDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.studentRepo.delete({id: id});
    return id;
  }
}
