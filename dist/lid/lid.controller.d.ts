import { LidService } from './lid.service';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
export declare class LidController {
    private readonly lidService;
    constructor(lidService: LidService);
    create(createLidDto: CreateLidDto): Promise<CreateLidDto & import("./entities/lid.entity").Lid>;
    findAll(): Promise<import("./entities/lid.entity").Lid[]>;
    findOne(id: string): Promise<import("./entities/lid.entity").Lid>;
    update(id: string, updateLidDto: UpdateLidDto): Promise<import("./entities/lid.entity").Lid>;
    remove(id: string): Promise<number>;
}
