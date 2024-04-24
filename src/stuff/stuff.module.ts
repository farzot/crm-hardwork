import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { Stuff } from './entities/stuff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Stuff])],
  controllers: [StuffController],
  providers: [StuffService],
})
export class StuffModule {}
