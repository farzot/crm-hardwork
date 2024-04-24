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
exports.ReasonLidController = void 0;
const common_1 = require("@nestjs/common");
const reason_lid_service_1 = require("./reason_lid.service");
const create_reason_lid_dto_1 = require("./dto/create-reason_lid.dto");
const update_reason_lid_dto_1 = require("./dto/update-reason_lid.dto");
let ReasonLidController = class ReasonLidController {
    constructor(reasonLidService) {
        this.reasonLidService = reasonLidService;
    }
    create(createReasonLidDto) {
        return this.reasonLidService.create(createReasonLidDto);
    }
    findAll() {
        return this.reasonLidService.findAll();
    }
    findOne(id) {
        return this.reasonLidService.findOne(+id);
    }
    update(id, updateReasonLidDto) {
        return this.reasonLidService.update(+id, updateReasonLidDto);
    }
    remove(id) {
        return this.reasonLidService.remove(+id);
    }
};
exports.ReasonLidController = ReasonLidController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reason_lid_dto_1.CreateReasonLidDto]),
    __metadata("design:returntype", void 0)
], ReasonLidController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReasonLidController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReasonLidController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reason_lid_dto_1.UpdateReasonLidDto]),
    __metadata("design:returntype", void 0)
], ReasonLidController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReasonLidController.prototype, "remove", null);
exports.ReasonLidController = ReasonLidController = __decorate([
    (0, common_1.Controller)('reason-lid'),
    __metadata("design:paramtypes", [reason_lid_service_1.ReasonLidService])
], ReasonLidController);
//# sourceMappingURL=reason_lid.controller.js.map