import { Column, ManyToOne,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StudentLesson } from "../../student_lesson/entities/student_lesson.entity";
import { Group } from "../../group/entities/group.entity";

export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lesson_theme: string;

  @Column()
  lesson_number: number;

  @Column()
  lesson_date: string;

  @OneToOne(() => StudentLesson, (studentLesson) => studentLesson.lesson_id)
  studentLesson: StudentLesson;

  @ManyToOne(()=>Group, (groups)=>groups.lessons)
  group_id: Group;
}
