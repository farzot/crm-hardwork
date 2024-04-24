"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasonLidModule = void 0;
const common_1 = require("@nestjs/common");
const reason_lid_service_1 = require("./reason_lid.service");
const reason_lid_controller_1 = require("./reason_lid.controller");
const reason_lid_entity_1 = require("./entities/reason_lid.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ReasonLidModule = class ReasonLidModule {
};
exports.ReasonLidModule = ReasonLidModule;
exports.ReasonLidModule = ReasonLidModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reason_lid_entity_1.ReasonLid])],
        controllers: [reason_lid_controller_1.ReasonLidController],
        providers: [reason_lid_service_1.ReasonLidService],
    })
], ReasonLidModule);
//# sourceMappingURL=reason_lid.module.js.map