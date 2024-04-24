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
exports.LidController = void 0;
const common_1 = require("@nestjs/common");
const lid_service_1 = require("./lid.service");
const create_lid_dto_1 = require("./dto/create-lid.dto");
const update_lid_dto_1 = require("./dto/update-lid.dto");
let LidController = class LidController {
    constructor(lidService) {
        this.lidService = lidService;
    }
    create(createLidDto) {
        return this.lidService.create(createLidDto);
    }
    findAll() {
        return this.lidService.findAll();
    }
    findOne(id) {
        return this.lidService.findOne(+id);
    }
    update(id, updateLidDto) {
        return this.lidService.update(+id, updateLidDto);
    }
    remove(id) {
        return this.lidService.remove(+id);
    }
};
exports.LidController = LidController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lid_dto_1.CreateLidDto]),
    __metadata("design:returntype", void 0)
], LidController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LidController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LidController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lid_dto_1.UpdateLidDto]),
    __metadata("design:returntype", void 0)
], LidController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LidController.prototype, "remove", null);
exports.LidController = LidController = __decorate([
    (0, common_1.Controller)('lid'),
    __metadata("design:paramtypes", [lid_service_1.LidService])
], LidController);
//# sourceMappingURL=lid.controller.js.map