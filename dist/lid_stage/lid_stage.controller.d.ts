import { LidStageService } from './lid_stage.service';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';
export declare class LidStageController {
    private readonly lidStageService;
    constructor(lidStageService: LidStageService);
    create(createLidStageDto: CreateLidStageDto): Promise<CreateLidStageDto & import("./entities/lid_stage.entity").LidStage>;
    findAll(): Promise<import("./entities/lid_stage.entity").LidStage[]>;
    findOne(id: string): Promise<import("./entities/lid_stage.entity").LidStage>;
    update(id: string, updateLidStageDto: UpdateLidStageDto): Promise<import("./entities/lid_stage.entity").LidStage>;
    remove(id: string): Promise<number>;
}
