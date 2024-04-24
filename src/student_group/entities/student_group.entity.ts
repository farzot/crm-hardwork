import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentGroup {
    @PrimaryGeneratedColumn()
    id: number;

}
