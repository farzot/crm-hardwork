import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
export declare class StuffController {
    private readonly stuffService;
    constructor(stuffService: StuffService);
    create(createStuffDto: CreateStuffDto): Promise<CreateStuffDto & import("./entities/stuff.entity").Stuff>;
    findAll(): Promise<import("./entities/stuff.entity").Stuff[]>;
    findOne(id: string): Promise<import("./entities/stuff.entity").Stuff>;
    update(id: string, updateStuffDto: UpdateStuffDto): Promise<import("./entities/stuff.entity").Stuff>;
    remove(id: string): Promise<number>;
}
