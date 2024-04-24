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
exports.GroupStuffController = void 0;
const common_1 = require("@nestjs/common");
const group_stuff_service_1 = require("./group_stuff.service");
const create_group_stuff_dto_1 = require("./dto/create-group_stuff.dto");
const update_group_stuff_dto_1 = require("./dto/update-group_stuff.dto");
let GroupStuffController = class GroupStuffController {
    constructor(groupStuffService) {
        this.groupStuffService = groupStuffService;
    }
    create(createGroupStuffDto) {
        return this.groupStuffService.create(createGroupStuffDto);
    }
    findAll() {
        return this.groupStuffService.findAll();
    }
    findOne(id) {
        return this.groupStuffService.findOne(+id);
    }
    update(id, updateGroupStuffDto) {
        return this.groupStuffService.update(+id, updateGroupStuffDto);
    }
    remove(id) {
        return this.groupStuffService.remove(+id);
    }
};
exports.GroupStuffController = GroupStuffController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_stuff_dto_1.CreateGroupStuffDto]),
    __metadata("design:returntype", void 0)
], GroupStuffController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupStuffController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupStuffController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_group_stuff_dto_1.UpdateGroupStuffDto]),
    __metadata("design:returntype", void 0)
], GroupStuffController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupStuffController.prototype, "remove", null);
exports.GroupStuffController = GroupStuffController = __decorate([
    (0, common_1.Controller)('group-stuff'),
    __metadata("design:paramtypes", [group_stuff_service_1.GroupStuffService])
], GroupStuffController);
//# sourceMappingURL=group_stuff.controller.js.map