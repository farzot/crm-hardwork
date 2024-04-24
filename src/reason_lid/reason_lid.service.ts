import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectRepository(ReasonLid)
    private readonly reasonLidRepo: Repository<ReasonLid>,
  ) {}

  create(createLidStageDto: CreateReasonLidDto) {
    return this.reasonLidRepo.save(createLidStageDto);
  }

  findAll() {
    return this.reasonLidRepo.find();
  }

  findOne(id: number) {
    return this.reasonLidRepo.findOneBy({ id });
  }

  async update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    await this.reasonLidRepo.update({ id }, updateReasonLidDto);
    return this.reasonLidRepo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.reasonLidRepo.delete({ id });
    return id;
  }
}
