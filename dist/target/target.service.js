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
exports.TargetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const target_entity_1 = require("./entities/target.entity");
const typeorm_2 = require("typeorm");
let TargetService = class TargetService {
    constructor(targetRepo) {
        this.targetRepo = targetRepo;
    }
    create(createTargetDto) {
        return this.targetRepo.save(createTargetDto);
    }
    findAll() {
        return this.targetRepo.find();
        ;
    }
    findOne(id) {
        return this.targetRepo.findOneBy({ id });
    }
    async update(id, updateTargetDto) {
        await this.targetRepo.update({ id }, updateTargetDto);
        return this.targetRepo.findOneBy({ id });
    }
    async remove(id) {
        await this.targetRepo.delete({ id });
        return id;
    }
};
exports.TargetService = TargetService;
exports.TargetService = TargetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(target_entity_1.Target)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TargetService);
//# sourceMappingURL=target.service.js.map