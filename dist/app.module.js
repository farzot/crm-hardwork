"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const lid_status_module_1 = require("./lid_status/lid_status.module");
const target_module_1 = require("./target/target.module");
const reason_lid_module_1 = require("./reason_lid/reason_lid.module");
const lid_stage_module_1 = require("./lid_stage/lid_stage.module");
const typeorm_1 = require("@nestjs/typeorm");
const lid_status_entity_1 = require("./lid_status/entities/lid_status.entity");
const lid_stage_entity_1 = require("./lid_stage/entities/lid_stage.entity");
const target_entity_1 = require("./target/entities/target.entity");
const reason_lid_entity_1 = require("./reason_lid/entities/reason_lid.entity");
const lid_module_1 = require("./lid/lid.module");
const students_module_1 = require("./students/students.module");
const payment_module_1 = require("./payment/payment.module");
const student_group_module_1 = require("./student_group/student_group.module");
const student_lesson_module_1 = require("./student_lesson/student_lesson.module");
const lesson_module_1 = require("./lesson/lesson.module");
const group_module_1 = require("./group/group.module");
const group_stuff_module_1 = require("./group_stuff/group_stuff.module");
const stuff_module_1 = require("./stuff/stuff.module");
const role_module_1 = require("./role/role.module");
const branch_module_1 = require("./branch/branch.module");
const admin_module_1 = require("./admin/admin.module");
const role_entity_1 = require("./role/entities/role.entity");
const typeorm_2 = require("typeorm");
const branch_entity_1 = require("./branch/entities/branch.entity");
const group_entity_1 = require("./group/entities/group.entity");
const group_stuff_entity_1 = require("./group_stuff/entities/group_stuff.entity");
const lesson_entity_1 = require("./lesson/entities/lesson.entity");
const lid_entity_1 = require("./lid/entities/lid.entity");
const payment_entity_1 = require("./payment/entities/payment.entity");
const student_group_entity_1 = require("./student_group/entities/student_group.entity");
const student_entity_1 = require("./students/entities/student.entity");
const student_lesson_entity_1 = require("./student_lesson/entities/student_lesson.entity");
const stuff_entity_1 = require("./stuff/entities/stuff.entity");
const stuff_role_entity_1 = require("./stuff_role/entities/stuff_role.entity");
const stuff_role_module_1 = require("./stuff_role/stuff_role.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'hardwork',
                entities: [
                    lid_status_entity_1.LidStatus,
                    lid_stage_entity_1.LidStage,
                    target_entity_1.Target,
                    reason_lid_entity_1.ReasonLid,
                    role_entity_1.Role,
                    typeorm_2.Admin,
                    branch_entity_1.Branch,
                    group_entity_1.Group,
                    group_stuff_entity_1.GroupStuff,
                    lesson_entity_1.Lesson,
                    lid_entity_1.Lid,
                    lid_stage_entity_1.LidStage,
                    lid_status_entity_1.LidStatus,
                    payment_entity_1.Payment,
                    student_group_entity_1.StudentGroup,
                    student_entity_1.Student,
                    student_lesson_entity_1.StudentLesson,
                    stuff_entity_1.Stuff,
                    stuff_role_entity_1.StuffRole
                ],
                synchronize: true,
            }),
            lid_status_module_1.LidStatusModule,
            target_module_1.TargetModule,
            reason_lid_module_1.ReasonLidModule,
            lid_stage_module_1.LidStageModule,
            lid_module_1.LidModule,
            students_module_1.StudentsModule,
            payment_module_1.PaymentModule,
            student_group_module_1.StudentGroupModule,
            student_lesson_module_1.StudentLessonModule,
            lesson_module_1.LessonModule,
            group_module_1.GroupModule,
            group_stuff_module_1.GroupStuffModule,
            stuff_module_1.StuffModule,
            role_module_1.RoleModule,
            branch_module_1.BranchModule,
            admin_module_1.AdminModule,
            stuff_role_module_1.StuffRoleModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map