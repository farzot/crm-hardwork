import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ nullable: false })
  // stuffId: number;

  @ManyToOne(() => Stuff, (stuff) => stuff.stuffRoles)
  stuffId: Stuff;

  // @Column({ nullable: false })
  // roleId: number;

  @ManyToOne(() => Role, (role) => role.stuffRoles)
  roleId: Role;
}
