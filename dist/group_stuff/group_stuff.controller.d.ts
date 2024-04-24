import { GroupStuffService } from './group_stuff.service';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
export declare class GroupStuffController {
    private readonly groupStuffService;
    constructor(groupStuffService: GroupStuffService);
    create(createGroupStuffDto: CreateGroupStuffDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGroupStuffDto: UpdateGroupStuffDto): string;
    remove(id: string): string;
}
