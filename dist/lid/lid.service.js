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
exports.LidService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lid_entity_1 = require("./entities/lid.entity");
const typeorm_2 = require("typeorm");
let LidService = class LidService {
    constructor(lidRepo) {
        this.lidRepo = lidRepo;
    }
    create(createLidDto) {
        return this.lidRepo.save(createLidDto);
    }
    findAll() {
        return this.lidRepo.find({
            relations: ['target', 'lidStage', 'group', 'lidStatus', 'reasonLid'],
        });
    }
    findOne(id) {
        return this.lidRepo.findOne({
            where: { id: id },
            relations: ['target', 'lidStage', 'group', 'lidStatus', 'reasonLid'],
        });
    }
    async update(id, updateLidDto) {
        await this.lidRepo.update({ id }, updateLidDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.lidRepo.delete({ id });
        return id;
    }
};
exports.LidService = LidService;
exports.LidService = LidService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lid_entity_1.Lid)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LidService);
//# sourceMappingURL=lid.service.js.map