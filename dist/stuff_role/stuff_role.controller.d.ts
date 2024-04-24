import { StuffRoleService } from './stuff_role.service';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
export declare class StuffRoleController {
    private readonly stuffRoleService;
    constructor(stuffRoleService: StuffRoleService);
    create(createStuffRoleDto: CreateStuffRoleDto): Promise<CreateStuffRoleDto & import("./entities/stuff_role.entity").StuffRole>;
    findAll(): Promise<import("./entities/stuff_role.entity").StuffRole[]>;
    findOne(id: string): string;
    update(id: string, updateStuffRoleDto: UpdateStuffRoleDto): string;
    remove(id: string): string;
}
