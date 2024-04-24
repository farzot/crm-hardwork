import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
export declare class StudentLessonService {
    create(createStudentLessonDto: CreateStudentLessonDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStudentLessonDto: UpdateStudentLessonDto): string;
    remove(id: number): string;
}
