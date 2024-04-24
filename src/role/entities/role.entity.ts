import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';


@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StuffRole, (stuffRole) => stuffRole.roleId)
  stuffRoles: StuffRole[];
}
