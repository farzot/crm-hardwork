import { TargetService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
export declare class TargetController {
    private readonly targetService;
    constructor(targetService: TargetService);
    create(createTargetDto: CreateTargetDto): Promise<CreateTargetDto & import("./entities/target.entity").Target>;
    findAll(): Promise<import("./entities/target.entity").Target[]>;
    findOne(id: string): Promise<import("./entities/target.entity").Target>;
    update(id: string, updateTargetDto: UpdateTargetDto): Promise<import("./entities/target.entity").Target>;
    remove(id: string): Promise<number>;
}
