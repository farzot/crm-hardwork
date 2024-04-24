"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupStuffService = void 0;
const common_1 = require("@nestjs/common");
let GroupStuffService = class GroupStuffService {
    create(createGroupStuffDto) {
        return 'This action adds a new groupStuff';
    }
    findAll() {
        return `This action returns all groupStuff`;
    }
    findOne(id) {
        return `This action returns a #${id} groupStuff`;
    }
    update(id, updateGroupStuffDto) {
        return `This action updates a #${id} groupStuff`;
    }
    remove(id) {
        return `This action removes a #${id} groupStuff`;
    }
};
exports.GroupStuffService = GroupStuffService;
exports.GroupStuffService = GroupStuffService = __decorate([
    (0, common_1.Injectable)()
], GroupStuffService);
//# sourceMappingURL=group_stuff.service.js.map