import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BranchService {
  constructor (@InjectRepository(Branch) private readonly branchRepo: Repository<Branch> ){}

  async create(createBranchDto: CreateBranchDto) {
    return this.branchRepo.save(createBranchDto);
  }

  async findAll() {
    return this.branchRepo.find({relations: ['Branch']});
  }

  async findOne(id: number) {
    return this.branchRepo.findOne({ where: { id }, relations: ['Branch'] });
  }

 async  update(id: number, updateBranchDto: UpdateBranchDto) {
  await this.branchRepo.update({ id }, updateBranchDto);
    return this.findOne;
  }

  async remove(id: number) {
    await this.branchRepo.delete({ id });
    return id;
  }
}
