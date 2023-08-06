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
exports.UpdateSecondmatrixDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_secondmatrix_dto_1 = require("./create-secondmatrix.dto");
class UpdateSecondmatrixDto extends (0, mapped_types_1.PartialType)(create_secondmatrix_dto_1.CreateSecondmatrixDto) {
}
exports.UpdateSecondmatrixDto = UpdateSecondmatrixDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateSecondmatrixDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateSecondmatrixDto.prototype, "order_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateSecondmatrixDto.prototype, "affiliate_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateSecondmatrixDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateSecondmatrixDto.prototype, "commission_fee", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSecondmatrixDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateSecondmatrixDto.prototype, "createdAt", void 0);
//# sourceMappingURL=update-secondmatrix.dto.js.map