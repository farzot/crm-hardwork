import { StudentLessonService } from './student_lesson.service';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
export declare class StudentLessonController {
    private readonly studentLessonService;
    constructor(studentLessonService: StudentLessonService);
    create(createStudentLessonDto: CreateStudentLessonDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStudentLessonDto: UpdateStudentLessonDto): string;
    remove(id: string): string;
}
