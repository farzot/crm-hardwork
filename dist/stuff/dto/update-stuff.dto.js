"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStuffDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stuff_dto_1 = require("./create-stuff.dto");
class UpdateStuffDto extends (0, mapped_types_1.PartialType)(create_stuff_dto_1.CreateStuffDto) {
}
exports.UpdateStuffDto = UpdateStuffDto;
//# sourceMappingURL=update-stuff.dto.js.map