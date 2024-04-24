import { Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffRoleService {
  constructor(@InjectRepository(StuffRole) private readonly stuffRoleRepo: Repository<StuffRole>) {}
  create(createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleRepo.save(createStuffRoleDto);
  }

  async findAll() {
    return this.stuffRoleRepo.find({relations:['stuff','role']});
  }

  findOne(id: number) {
    return this.stuffRoleRepo.findOne({ where: { id: id } });
  }

  async update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    await this.stuffRoleRepo.update({id},updateStuffRoleDto)
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.stuffRoleRepo.delete({id})
    return id;
  }
}
