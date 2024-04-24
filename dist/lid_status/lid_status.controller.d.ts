import { LidStatusService } from './lid_status.service';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
export declare class LidStatusController {
    private readonly lidStatusService;
    constructor(lidStatusService: LidStatusService);
    create(createLidStatusDto: CreateLidStatusDto): Promise<CreateLidStatusDto & import("./entities/lid_status.entity").LidStatus>;
    findAll(): Promise<import("./entities/lid_status.entity").LidStatus[]>;
    findOne(id: string): Promise<import("./entities/lid_status.entity").LidStatus>;
    update(id: string, updateLidStatusDto: UpdateLidStatusDto): Promise<import("./entities/lid_status.entity").LidStatus>;
    remove(id: string): Promise<number>;
}
