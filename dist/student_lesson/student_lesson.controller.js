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
exports.StudentLessonController = void 0;
const common_1 = require("@nestjs/common");
const student_lesson_service_1 = require("./student_lesson.service");
const create_student_lesson_dto_1 = require("./dto/create-student_lesson.dto");
const update_student_lesson_dto_1 = require("./dto/update-student_lesson.dto");
let StudentLessonController = class StudentLessonController {
    constructor(studentLessonService) {
        this.studentLessonService = studentLessonService;
    }
    create(createStudentLessonDto) {
        return this.studentLessonService.create(createStudentLessonDto);
    }
    findAll() {
        return this.studentLessonService.findAll();
    }
    findOne(id) {
        return this.studentLessonService.findOne(+id);
    }
    update(id, updateStudentLessonDto) {
        return this.studentLessonService.update(+id, updateStudentLessonDto);
    }
    remove(id) {
        return this.studentLessonService.remove(+id);
    }
};
exports.StudentLessonController = StudentLessonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_lesson_dto_1.CreateStudentLessonDto]),
    __metadata("design:returntype", void 0)
], StudentLessonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentLessonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentLessonController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_lesson_dto_1.UpdateStudentLessonDto]),
    __metadata("design:returntype", void 0)
], StudentLessonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentLessonController.prototype, "remove", null);
exports.StudentLessonController = StudentLessonController = __decorate([
    (0, common_1.Controller)('student-lesson'),
    __metadata("design:paramtypes", [student_lesson_service_1.StudentLessonService])
], StudentLessonController);
//# sourceMappingURL=student_lesson.controller.js.map