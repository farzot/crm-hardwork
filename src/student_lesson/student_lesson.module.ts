import { Module } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { StudentLessonController } from './student_lesson.controller';
import { StudentLesson } from './entities/student_lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StudentLesson])],
  controllers: [StudentLessonController],
  providers: [StudentLessonService],
})
export class StudentLessonModule {}
