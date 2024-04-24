import { Repository } from 'typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
export declare class LidStatusService {
    private readonly lidStatusRepo;
    constructor(lidStatusRepo: Repository<LidStatus>);
    create(createLidStatusDto: CreateLidStatusDto): Promise<CreateLidStatusDto & LidStatus>;
    findAll(): Promise<LidStatus[]>;
    findOne(id: number): Promise<LidStatus>;
    update(id: number, updateLidStatusDto: UpdateLidStatusDto): Promise<LidStatus>;
    remove(id: number): Promise<number>;
}
