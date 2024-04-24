"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLidDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lid_dto_1 = require("./create-lid.dto");
class UpdateLidDto extends (0, mapped_types_1.PartialType)(create_lid_dto_1.CreateLidDto) {
}
exports.UpdateLidDto = UpdateLidDto;
//# sourceMappingURL=update-lid.dto.js.map