import { Injectable } from '@nestjs/common';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group_stuff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupStuffService {
  constructor (@InjectRepository(GroupStuff) private readonly groupStuffRepo: Repository<GroupStuff> ){}

  create(createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffRepo.save(createGroupStuffDto);
  }

  findAll() {
    return this.groupStuffRepo.find({relations: ['Group','Stuff']});
  }

  findOne(id: number) {
    return this.groupStuffRepo.findOne({
      where: { id: id },
      relations: ['Group', 'Stuff'],
    });
  }

  async update(id: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    await this.groupStuffRepo.update({id},updateGroupStuffDto)
    
    return this.findOne;
  }

  async remove(id: number) {
    await this.groupStuffRepo.delete({id});
    return id;
  }
}
