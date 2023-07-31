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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFirstmatrixDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_firstmatrix_dto_1 = require("./create-firstmatrix.dto");
class UpdateFirstmatrixDto extends (0, mapped_types_1.PartialType)(create_firstmatrix_dto_1.CreateFirstmatrixDto) {
}
exports.UpdateFirstmatrixDto = UpdateFirstmatrixDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateFirstmatrixDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateFirstmatrixDto.prototype, "secondmatrix_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateFirstmatrixDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateFirstmatrixDto.prototype, "affiliate_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFirstmatrixDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateFirstmatrixDto.prototype, "createdAt", void 0);
//# sourceMappingURL=update-firstmatrix.dto.js.map