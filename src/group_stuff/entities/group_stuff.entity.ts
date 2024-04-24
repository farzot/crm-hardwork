import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";
import { Stuff } from "../../stuff/entities/stuff.entity";

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.groupStuff)
  gorup_id: Group;

  @ManyToOne(() => Stuff, (stuff) => stuff.groupStuff)
  stuff_id: Stuff;
}
