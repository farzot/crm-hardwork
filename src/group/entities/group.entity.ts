import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';
import { LidStage } from '../../lid_stage/entities/lid_stage.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { GroupStuff } from '../../group_stuff/entities/group_stuff.entity';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  lesson_start_time: string;

  @Column()
  lesson_continous: string;

  @Column()
  lesson_week_day: string;

  @Column()
  room_number: string;

  @Column()
  room_floor: string;

  @Column()
  lesson_quantity: number;

  @Column()
  is_active: boolean;

  @ManyToOne(() => LidStage, (lidStage) => lidStage.groups)
  group_stage_id: LidStage;

  @ManyToOne(() => Branch, (branchs) => branchs.groups)
  branch_id: Branch;

  @OneToMany(() => Lid, (lids) => lids.trial_lesson_group_id)
  lids: Lid[];

  @OneToMany(() => GroupStuff, (groupStuff) => groupStuff.gorup_id)
  groupStuff: GroupStuff[];

  @OneToMany(() => Lesson, (lesson) => lesson.group_id)
  lessons: Lesson[];
}
