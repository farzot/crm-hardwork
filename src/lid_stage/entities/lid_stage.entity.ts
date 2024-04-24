import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class LidStage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Lid, (lids) => lids.lid_stage_id)
  lids: Lid[];

  @OneToMany(() => Group, (groups) => groups.group_stage_id)
  groups: Group[];
}
