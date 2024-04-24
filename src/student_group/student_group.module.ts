import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';
import { Student } from '../students/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentGroupController],
  providers: [StudentGroupService],
})
export class StudentGroupModule {}
