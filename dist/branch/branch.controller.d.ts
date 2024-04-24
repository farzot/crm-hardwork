import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
    create(createBranchDto: CreateBranchDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBranchDto: UpdateBranchDto): string;
    remove(id: string): string;
}
