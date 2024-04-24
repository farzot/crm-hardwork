import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";
import { StudentLesson } from "../../student_lesson/entities/student_lesson.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone_number: string;

    @Column()
    birthday: string;

    @Column()
    male: string;

    @OneToOne(() => Lid, (lids) => lids.student_id)
    lid_id: Lid;

    @OneToMany(()=> StudentLesson, (studentLesson)=> studentLesson.student_id)
    student_lessons: StudentLesson[];
}
