import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';
export declare class StuffService {
    private readonly stuffRepo;
    constructor(stuffRepo: Repository<Stuff>);
    create(createStuffDto: CreateStuffDto): Promise<CreateStuffDto & Stuff>;
    findAll(): Promise<Stuff[]>;
    findOne(id: number): Promise<Stuff>;
    update(id: number, updateStuffDto: UpdateStuffDto): Promise<Stuff>;
    remove(id: number): Promise<number>;
}
