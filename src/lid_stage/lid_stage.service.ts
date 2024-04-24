import { Injectable } from '@nestjs/common';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStage } from './entities/lid_stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStageService {
  constructor (@InjectRepository(LidStage) private readonly lidStageRepo: Repository<LidStage>){}

  create(createLidStageDto: CreateLidStageDto) {
    return this.lidStageRepo.save(createLidStageDto);
  }

  findAll() {
    return this.lidStageRepo.find({});
  }

  findOne(id: number) {
    return this.lidStageRepo.findOneBy({id});
  }

  async update(id: number, updateLidStageDto: UpdateLidStageDto) {
    await this.lidStageRepo.update({id},updateLidStageDto)
    return this.lidStageRepo.findOneBy({id});
  }

  async remove(id: number) {
     await this.lidStageRepo.delete({id});
    return id;
  }
}
