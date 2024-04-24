import { ReasonLidService } from './reason_lid.service';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
export declare class ReasonLidController {
    private readonly reasonLidService;
    constructor(reasonLidService: ReasonLidService);
    create(createReasonLidDto: CreateReasonLidDto): Promise<CreateReasonLidDto & import("./entities/reason_lid.entity").ReasonLid>;
    findAll(): Promise<import("./entities/reason_lid.entity").ReasonLid[]>;
    findOne(id: string): Promise<import("./entities/reason_lid.entity").ReasonLid>;
    update(id: string, updateReasonLidDto: UpdateReasonLidDto): Promise<import("./entities/reason_lid.entity").ReasonLid>;
    remove(id: string): Promise<number>;
}
