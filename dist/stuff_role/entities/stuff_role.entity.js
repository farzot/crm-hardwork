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
exports.StuffRole = void 0;
const typeorm_1 = require("typeorm");
const stuff_entity_1 = require("../../stuff/entities/stuff.entity");
const role_entity_1 = require("../../role/entities/role.entity");
let StuffRole = class StuffRole {
};
exports.StuffRole = StuffRole;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StuffRole.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stuff_entity_1.Stuff, (stuff) => stuff.stuffRoles),
    __metadata("design:type", stuff_entity_1.Stuff)
], StuffRole.prototype, "stuffId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.stuffRoles),
    __metadata("design:type", role_entity_1.Role)
], StuffRole.prototype, "roleId", void 0);
exports.StuffRole = StuffRole = __decorate([
    (0, typeorm_1.Entity)()
], StuffRole);
//# sourceMappingURL=stuff_role.entity.js.map