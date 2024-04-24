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
exports.StuffController = void 0;
const common_1 = require("@nestjs/common");
const stuff_service_1 = require("./stuff.service");
const create_stuff_dto_1 = require("./dto/create-stuff.dto");
const update_stuff_dto_1 = require("./dto/update-stuff.dto");
let StuffController = class StuffController {
    constructor(stuffService) {
        this.stuffService = stuffService;
    }
    create(createStuffDto) {
        return this.stuffService.create(createStuffDto);
    }
    findAll() {
        return this.stuffService.findAll();
    }
    findOne(id) {
        return this.stuffService.findOne(+id);
    }
    update(id, updateStuffDto) {
        return this.stuffService.update(+id, updateStuffDto);
    }
    remove(id) {
        return this.stuffService.remove(+id);
    }
};
exports.StuffController = StuffController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stuff_dto_1.CreateStuffDto]),
    __metadata("design:returntype", void 0)
], StuffController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StuffController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StuffController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stuff_dto_1.UpdateStuffDto]),
    __metadata("design:returntype", void 0)
], StuffController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StuffController.prototype, "remove", null);
exports.StuffController = StuffController = __decorate([
    (0, common_1.Controller)('stuff'),
    __metadata("design:paramtypes", [stuff_service_1.StuffService])
], StuffController);
//# sourceMappingURL=stuff.controller.js.map