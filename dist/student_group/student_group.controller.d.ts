import { StudentGroupService } from './student_group.service';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
export declare class StudentGroupController {
    private readonly studentGroupService;
    constructor(studentGroupService: StudentGroupService);
    create(createStudentGroupDto: CreateStudentGroupDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStudentGroupDto: UpdateStudentGroupDto): string;
    remove(id: string): string;
}
