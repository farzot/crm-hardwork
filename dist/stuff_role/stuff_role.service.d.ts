import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { StuffRole } from './entities/stuff_role.entity';
import { Repository } from 'typeorm';
export declare class StuffRoleService {
    private readonly stuffRoleRepo;
    constructor(stuffRoleRepo: Repository<StuffRole>);
    create(createStuffRoleDto: CreateStuffRoleDto): Promise<CreateStuffRoleDto & StuffRole>;
    findAll(): Promise<StuffRole[]>;
    findOne(id: number): string;
    update(id: number, updateStuffRoleDto: UpdateStuffRoleDto): string;
    remove(id: number): string;
}
