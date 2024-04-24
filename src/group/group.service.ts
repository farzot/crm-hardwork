import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor (@InjectRepository(Group) private readonly GroupRepo: Repository<Group>){}

  async create(createGroupDto: CreateGroupDto) {
    return this.GroupRepo.save(createGroupDto);
  }

  async findAll() {
    return this.GroupRepo.find({ relations: ['LidStage','Branch'] });
  }

  async findOne(id: number) {
    return this.GroupRepo.findOne({
      where: { id: id },
      relations: ['LidStage', 'Branch'],
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    await this.GroupRepo.update({id},updateGroupDto)
    return this.findOne;
  }

  async remove(id: number) {
    await this.GroupRepo.delete({id})
    return id;
  }
}
