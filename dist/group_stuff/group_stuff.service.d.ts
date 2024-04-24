import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
export declare class GroupStuffService {
    create(createGroupStuffDto: CreateGroupStuffDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGroupStuffDto: UpdateGroupStuffDto): string;
    remove(id: number): string;
}
