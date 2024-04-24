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
exports.StuffRoleController = void 0;
const common_1 = require("@nestjs/common");
const stuff_role_service_1 = require("./stuff_role.service");
const create_stuff_role_dto_1 = require("./dto/create-stuff_role.dto");
const update_stuff_role_dto_1 = require("./dto/update-stuff_role.dto");
let StuffRoleController = class StuffRoleController {
    constructor(stuffRoleService) {
        this.stuffRoleService = stuffRoleService;
    }
    create(createStuffRoleDto) {
        return this.stuffRoleService.create(createStuffRoleDto);
    }
    findAll() {
        return this.stuffRoleService.findAll();
    }
    findOne(id) {
        return this.stuffRoleService.findOne(+id);
    }
    update(id, updateStuffRoleDto) {
        return this.stuffRoleService.update(+id, updateStuffRoleDto);
    }
    remove(id) {
        return this.stuffRoleService.remove(+id);
    }
};
exports.StuffRoleController = StuffRoleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stuff_role_dto_1.CreateStuffRoleDto]),
    __metadata("design:returntype", void 0)
], StuffRoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StuffRoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StuffRoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stuff_role_dto_1.UpdateStuffRoleDto]),
    __metadata("design:returntype", void 0)
], StuffRoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StuffRoleController.prototype, "remove", null);
exports.StuffRoleController = StuffRoleController = __decorate([
    (0, common_1.Controller)('stuff-role'),
    __metadata("design:paramtypes", [stuff_role_service_1.StuffRoleService])
], StuffRoleController);
//# sourceMappingURL=stuff_role.controller.js.map