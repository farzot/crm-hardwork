import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private readonly adminRepo: Repository<Admin>){}
  create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.save(createAdminDto);
  }

  async findAll() {
    return this.adminRepo.find();
  }

  async findOne(id: number) {
    return this.adminRepo.findOne({where: {id:id}});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.adminRepo.update({ id }, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.adminRepo.delete({ id });
    return id;
  }
}
