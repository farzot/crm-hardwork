"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupStuffModule = void 0;
const common_1 = require("@nestjs/common");
const group_stuff_service_1 = require("./group_stuff.service");
const group_stuff_controller_1 = require("./group_stuff.controller");
let GroupStuffModule = class GroupStuffModule {
};
exports.GroupStuffModule = GroupStuffModule;
exports.GroupStuffModule = GroupStuffModule = __decorate([
    (0, common_1.Module)({
        controllers: [group_stuff_controller_1.GroupStuffController],
        providers: [group_stuff_service_1.GroupStuffService],
    })
], GroupStuffModule);
//# sourceMappingURL=group_stuff.module.js.map