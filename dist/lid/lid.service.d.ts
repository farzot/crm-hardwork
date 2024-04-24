import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';
export declare class LidService {
    private readonly lidRepo;
    constructor(lidRepo: Repository<Lid>);
    create(createLidDto: CreateLidDto): Promise<CreateLidDto & Lid>;
    findAll(): Promise<Lid[]>;
    findOne(id: number): Promise<Lid>;
    update(id: number, updateLidDto: UpdateLidDto): Promise<Lid>;
    remove(id: number): Promise<number>;
}
