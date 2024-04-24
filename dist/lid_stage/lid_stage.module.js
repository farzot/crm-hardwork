"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LidStageModule = void 0;
const common_1 = require("@nestjs/common");
const lid_stage_service_1 = require("./lid_stage.service");
const lid_stage_controller_1 = require("./lid_stage.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lid_stage_entity_1 = require("./entities/lid_stage.entity");
let LidStageModule = class LidStageModule {
};
exports.LidStageModule = LidStageModule;
exports.LidStageModule = LidStageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lid_stage_entity_1.LidStage])],
        controllers: [lid_stage_controller_1.LidStageController],
        providers: [lid_stage_service_1.LidStageService],
    })
], LidStageModule);
//# sourceMappingURL=lid_stage.module.js.map