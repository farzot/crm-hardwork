import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor (@InjectRepository(Role) private readonly RoleRepo: Repository<Role>){}

  create(createRoleDto: CreateRoleDto) {
    return this.RoleRepo.save(createRoleDto);
  }

  findAll() {
    return this.RoleRepo.find();
  }

  findOne(id: number) {
    return this.RoleRepo.findOneBy({id});
  }

 async update(id: number, updateRoleDto: UpdateRoleDto) {
  await this.RoleRepo.update({ id }, updateRoleDto);
  return this.RoleRepo.findOneBy({id});
  }

  async remove(id: number) {
    await this.RoleRepo.delete({ id });
    return id;
  }
}
