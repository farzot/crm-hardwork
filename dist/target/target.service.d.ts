import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './entities/target.entity';
import { Repository } from 'typeorm';
export declare class TargetService {
    private readonly targetRepo;
    constructor(targetRepo: Repository<Target>);
    create(createTargetDto: CreateTargetDto): Promise<CreateTargetDto & Target>;
    findAll(): Promise<Target[]>;
    findOne(id: number): Promise<Target>;
    update(id: number, updateTargetDto: UpdateTargetDto): Promise<Target>;
    remove(id: number): Promise<number>;
}
