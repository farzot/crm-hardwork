import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  address: string;
  
  @Column()
  call_number: string;
  
  @OneToMany(() => Group, (groups) => groups.branch_id)
  groups: Group[];
}
