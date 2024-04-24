"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStuffRoleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stuff_role_dto_1 = require("./create-stuff_role.dto");
class UpdateStuffRoleDto extends (0, mapped_types_1.PartialType)(create_stuff_role_dto_1.CreateStuffRoleDto) {
}
exports.UpdateStuffRoleDto = UpdateStuffRoleDto;
//# sourceMappingURL=update-stuff_role.dto.js.map