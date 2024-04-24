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
exports.ReasonLid = void 0;
const typeorm_1 = require("typeorm");
const lid_entity_1 = require("../../lid/entities/lid.entity");
let ReasonLid = class ReasonLid {
};
exports.ReasonLid = ReasonLid;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReasonLid.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReasonLid.prototype, "reason_lid", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lid_entity_1.Lid, (lids) => lids.cancel_reason_id),
    __metadata("design:type", Array)
], ReasonLid.prototype, "lids", void 0);
exports.ReasonLid = ReasonLid = __decorate([
    (0, typeorm_1.Entity)()
], ReasonLid);
//# sourceMappingURL=reason_lid.entity.js.map