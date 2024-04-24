import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
export declare class StudentGroupService {
    create(createStudentGroupDto: CreateStudentGroupDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStudentGroupDto: UpdateStudentGroupDto): string;
    remove(id: number): string;
}
