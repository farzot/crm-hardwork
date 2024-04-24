import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Target } from "../../target/entities/target.entity";
import { LidStage } from "../../lid_stage/entities/lid_stage.entity";
import { LidStatus } from "../../lid_status/entities/lid_status.entity";
import { ReasonLid } from "../../reason_lid/entities/reason_lid.entity";
import { Group } from "../../group/entities/group.entity";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @ManyToOne(()=>Target, (target)=>target.lids)
  target_id: Target;

  @ManyToOne(()=>LidStage, (lidStage)=>lidStage.lids)
  lid_stage_id: LidStage;

  @Column()
  test_date: Date;

  @Column()
  trial_lesson_date: Date;

  @Column()
  trial_lesson_time: string;

  @ManyToOne(()=>Group, (group)=>group.lids)
  trial_lesson_group_id: Group;

  @ManyToOne(()=>LidStatus, (lidStatus)=>lidStatus.lids)
  lid_status_id: LidStatus;

  @ManyToOne(()=>ReasonLid, (reasonLid)=>reasonLid.lids)
  cancel_reason_id: ReasonLid;

  @OneToOne(()=>Student, (student) => student.lid_id)
  student_id: Student;

}
