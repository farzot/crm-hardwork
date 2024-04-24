import { Module } from '@nestjs/common';
import { LidStageService } from './lid_stage.service';
import { LidStageController } from './lid_stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStage } from './entities/lid_stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LidStage])],
  controllers: [LidStageController],
  providers: [LidStageService],
})
export class LidStageModule {}
