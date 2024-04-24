"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lid = void 0;
const typeorm_1 = require("typeorm");
const target_entity_1 = require("../../target/entities/target.entity");
const lid_stage_entity_1 = require("../../lid_stage/entities/lid_stage.entity");
const lid_status_entity_1 = require("../../lid_status/entities/lid_status.entity");
const reason_lid_entity_1 = require("../../reason_lid/entities/reason_lid.entity");
const group_entity_1 = require("../../group/entities/group.entity");
let Lid = class Lid {
};
exports.Lid = Lid;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lid.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lid.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lid.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lid.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => target_entity_1.Target, (target) => target.lids),
    __metadata("design:type", target_entity_1.Target)
], Lid.prototype, "target_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lid_stage_entity_1.LidStage, (lidStage) => lidStage.lids),
    __metadata("design:type", lid_stage_entity_1.LidStage)
], Lid.prototype, "lid_stage_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Lid.prototype, "test_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Lid.prototype, "trial_lesson_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lid.prototype, "trial_lesson_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (group) => group.lids),
    __metadata("design:type", group_entity_1.Group)
], Lid.prototype, "trial_lesson_group_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lid_status_entity_1.LidStatus, (lidStatus) => lidStatus.lids),
    __metadata("design:type", lid_status_entity_1.LidStatus)
], Lid.prototype, "lid_status_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reason_lid_entity_1.ReasonLid, (reasonLid) => reasonLid.lids),
    __metadata("design:type", reason_lid_entity_1.ReasonLid)
], Lid.prototype, "cancel_reason_id", void 0);
exports.Lid = Lid = __decorate([
    (0, typeorm_1.Entity)()
], Lid);
//# sourceMappingURL=lid.entity.js.map