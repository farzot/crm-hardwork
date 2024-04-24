"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LidStatusModule = void 0;
const common_1 = require("@nestjs/common");
const lid_status_service_1 = require("./lid_status.service");
const lid_status_controller_1 = require("./lid_status.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lid_status_entity_1 = require("./entities/lid_status.entity");
let LidStatusModule = class LidStatusModule {
};
exports.LidStatusModule = LidStatusModule;
exports.LidStatusModule = LidStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lid_status_entity_1.LidStatus])],
        controllers: [lid_status_controller_1.LidStatusController],
        providers: [lid_status_service_1.LidStatusService],
    })
], LidStatusModule);
//# sourceMappingURL=lid_status.module.js.map