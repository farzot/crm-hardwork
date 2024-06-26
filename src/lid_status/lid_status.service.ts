import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(LidStatus)
    private readonly lidStatusRepo: Repository<LidStatus>,
  ) {}

  create(createLidStatusDto: CreateLidStatusDto) {
    return this.lidStatusRepo.save(createLidStatusDto);
  }

  findAll() {
    return this.lidStatusRepo.find();
  }

  findOne(id: number) {
    return this.lidStatusRepo.findOneBy({ id });
  }

  async update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    await this.lidStatusRepo.update(id, updateLidStatusDto)
    return this.lidStatusRepo.findOneBy({id});
  }

  async remove(id: number) {
    await this.lidStatusRepo.delete(id);
    return id;
  }
}
