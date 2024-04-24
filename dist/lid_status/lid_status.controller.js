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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LidStatusController = void 0;
const common_1 = require("@nestjs/common");
const lid_status_service_1 = require("./lid_status.service");
const create_lid_status_dto_1 = require("./dto/create-lid_status.dto");
const update_lid_status_dto_1 = require("./dto/update-lid_status.dto");
let LidStatusController = class LidStatusController {
    constructor(lidStatusService) {
        this.lidStatusService = lidStatusService;
    }
    create(createLidStatusDto) {
        return this.lidStatusService.create(createLidStatusDto);
    }
    findAll() {
        return this.lidStatusService.findAll();
    }
    findOne(id) {
        return this.lidStatusService.findOne(+id);
    }
    update(id, updateLidStatusDto) {
        return this.lidStatusService.update(+id, updateLidStatusDto);
    }
    remove(id) {
        return this.lidStatusService.remove(+id);
    }
};
exports.LidStatusController = LidStatusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lid_status_dto_1.CreateLidStatusDto]),
    __metadata("design:returntype", void 0)
], LidStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LidStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LidStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lid_status_dto_1.UpdateLidStatusDto]),
    __metadata("design:returntype", void 0)
], LidStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LidStatusController.prototype, "remove", null);
exports.LidStatusController = LidStatusController = __decorate([
    (0, common_1.Controller)('lid-status'),
    __metadata("design:paramtypes", [lid_status_service_1.LidStatusService])
], LidStatusController);
//# sourceMappingURL=lid_status.controller.js.map