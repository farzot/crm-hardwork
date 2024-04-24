import { Injectable } from '@nestjs/common';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentGroup } from './entities/student_group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentGroupService {
  constructor(@InjectRepository(StudentGroup) private readonly studentGroupRepo: Repository<StudentGroup>){}
  create(createStudentGroupDto: CreateStudentGroupDto) {
    return this.studentGroupRepo.save(createStudentGroupDto);
  }

  findAll() {
    return this.studentGroupRepo.find();
  }

  async findOne(id: number) {
    return this.studentGroupRepo.findOne({where: {id:id}});
  }

  async update(id: number, updateStudentGroupDto: UpdateStudentGroupDto) {
    await this.studentGroupRepo.update({ id }, updateStudentGroupDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.studentGroupRepo.delete({ id });
    return id;
  }
}
