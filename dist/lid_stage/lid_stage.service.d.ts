import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';
import { LidStage } from './entities/lid_stage.entity';
import { Repository } from 'typeorm';
export declare class LidStageService {
    private readonly lidStageRepo;
    constructor(lidStageRepo: Repository<LidStage>);
    create(createLidStageDto: CreateLidStageDto): Promise<CreateLidStageDto & LidStage>;
    findAll(): Promise<LidStage[]>;
    findOne(id: number): Promise<LidStage>;
    update(id: number, updateLidStageDto: UpdateLidStageDto): Promise<LidStage>;
    remove(id: number): Promise<number>;
}
