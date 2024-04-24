import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "../../lesson/entities/lesson.entity";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class StudentLesson {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Lesson, (lessons) => lessons.studentLesson)
  lesson_id: Lesson;

  @ManyToOne(() => Student, (students) => students.student_lessons)
  student_id: Student;

  @Column({ default: false })
  is_there: boolean;

  @Column()
  reason: string;

  @Column()
  be_paid: boolean;
}
