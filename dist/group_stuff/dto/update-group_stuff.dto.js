"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupStuffDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_group_stuff_dto_1 = require("./create-group_stuff.dto");
class UpdateGroupStuffDto extends (0, mapped_types_1.PartialType)(create_group_stuff_dto_1.CreateGroupStuffDto) {
}
exports.UpdateGroupStuffDto = UpdateGroupStuffDto;
//# sourceMappingURL=update-group_stuff.dto.js.map