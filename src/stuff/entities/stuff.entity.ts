import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../role/entities/role.entity";
import { StuffRole } from "../../stuff_role/entities/stuff_role.entity";
import { GroupStuff } from "../../group_stuff/entities/group_stuff.entity";

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_active: boolean;

  @OneToMany(() => StuffRole, (stuffRole) => stuffRole.stuffId)
  stuffRoles: StuffRole[];
  @OneToMany(() => GroupStuff, (groupStuff) => groupStuff.stuff_id)
  groupStuff: GroupStuff[];
}


