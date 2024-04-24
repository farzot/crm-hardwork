import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  constructor(@InjectRepository(Lid) private readonly lidRepo: Repository<Lid>){}

  create(createLidDto: CreateLidDto) {
    return this.lidRepo.save(createLidDto);
  }

  findAll() {
    return this.lidRepo.find({
      relations: ['target', 'lidStage', 'group', 'lidStatus', 'reasonLid'],
    });
  }

  findOne(id: number) {
    return this.lidRepo.findOne({
      where: { id: id },
      relations: ['target', 'lidStage', 'group', 'lidStatus', 'reasonLid'],
    });
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    await this.lidRepo.update({id},updateLidDto)

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.lidRepo.delete({id});
    return id;
  }
}
