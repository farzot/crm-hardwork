"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentLessonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_student_lesson_dto_1 = require("./create-student_lesson.dto");
class UpdateStudentLessonDto extends (0, mapped_types_1.PartialType)(create_student_lesson_dto_1.CreateStudentLessonDto) {
}
exports.UpdateStudentLessonDto = UpdateStudentLessonDto;
//# sourceMappingURL=update-student_lesson.dto.js.map