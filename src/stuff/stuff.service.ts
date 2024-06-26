import { Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffService {
  constructor (@InjectRepository(Stuff) private readonly stuffRepo: Repository<Stuff>){}
  create(createStuffDto: CreateStuffDto) {
    return this.stuffRepo.save(createStuffDto);
  }

  findAll() {
    return this.stuffRepo.find({relations: ['stuffRole']} );
  }

  findOne(id: number) {
    return this.stuffRepo.findOne({ where: { id }, relations: ['stuffRole'] });
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    await this.stuffRepo.update({id},updateStuffDto)
    return this.stuffRepo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.stuffRepo.delete({id})
    return id;
  }
}
