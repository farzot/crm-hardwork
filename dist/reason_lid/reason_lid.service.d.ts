import { Repository } from 'typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
export declare class ReasonLidService {
    private readonly reasonLidRepo;
    constructor(reasonLidRepo: Repository<ReasonLid>);
    create(createLidStageDto: CreateReasonLidDto): Promise<CreateReasonLidDto & ReasonLid>;
    findAll(): Promise<ReasonLid[]>;
    findOne(id: number): Promise<ReasonLid>;
    update(id: number, updateReasonLidDto: UpdateReasonLidDto): Promise<ReasonLid>;
    remove(id: number): Promise<number>;
}
