"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LidModule = void 0;
const common_1 = require("@nestjs/common");
const lid_service_1 = require("./lid.service");
const lid_controller_1 = require("./lid.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lid_entity_1 = require("./entities/lid.entity");
let LidModule = class LidModule {
};
exports.LidModule = LidModule;
exports.LidModule = LidModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lid_entity_1.Lid])],
        controllers: [lid_controller_1.LidController],
        providers: [lid_service_1.LidService],
    })
], LidModule);
//# sourceMappingURL=lid.module.js.map