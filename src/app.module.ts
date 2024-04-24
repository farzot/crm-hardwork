import { Module } from '@nestjs/common';
import { LidStatusModule } from './lid_status/lid_status.module';
import { TargetModule } from './target/target.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { LidStageModule } from './lid_stage/lid_stage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { LidStage } from './lid_stage/entities/lid_stage.entity';
import { Target } from './target/entities/target.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { LidModule } from './lid/lid.module';
import { StudentsModule } from './students/students.module';
import { PaymentModule } from './payment/payment.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { LessonModule } from './lesson/lesson.module';
import { GroupModule } from './group/group.module';
import { GroupStuffModule } from './group_stuff/group_stuff.module';
import { StuffModule } from './stuff/stuff.module';
import { RoleModule } from './role/role.module';
import { BranchModule } from './branch/branch.module';
import { AdminModule } from './admin/admin.module';
import { Role } from './role/entities/role.entity';
import { Admin } from 'typeorm';
import { Branch } from './branch/entities/branch.entity';
import { Group } from './group/entities/group.entity';
import { GroupStuff } from './group_stuff/entities/group_stuff.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { Lid } from './lid/entities/lid.entity';
import { Payment } from './payment/entities/payment.entity';
import { StudentGroup } from './student_group/entities/student_group.entity';
import { Student } from './students/entities/student.entity';
import { StudentLesson } from './student_lesson/entities/student_lesson.entity';
import { Stuff } from './stuff/entities/stuff.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';
import { StuffRoleModule } from './stuff_role/stuff_role.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hardwork',
      entities: [
        LidStatus,
        LidStage,
        Target,
        ReasonLid,
        Role,
        Admin,
        Branch,
        Group,
        GroupStuff,
        Lesson,
        Lid,
        LidStage,
        LidStatus,
        Payment,
        StudentGroup,
        Student,
        StudentLesson,
        Stuff,
        StuffRole
      ],
      synchronize: true,
    }),
    LidStatusModule,
    TargetModule,
    ReasonLidModule,
    LidStageModule,
    LidModule,
    StudentsModule,
    PaymentModule,
    StudentGroupModule,
    StudentLessonModule,
    LessonModule,
    GroupModule,
    GroupStuffModule,
    StuffModule,
    RoleModule,
    BranchModule,
    AdminModule,
    StuffRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
