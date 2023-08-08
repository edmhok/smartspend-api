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
exports.UpdateProductsDto = void 0;
const class_validator_1 = require("@nestjs/class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_products_dto_1 = require("./create-products.dto");
class UpdateProductsDto extends (0, mapped_types_1.PartialType)(create_products_dto_1.CreateProductsDto) {
}
exports.UpdateProductsDto = UpdateProductsDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProductsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", String)
], UpdateProductsDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", String)
], UpdateProductsDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", String)
], UpdateProductsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], UpdateProductsDto.prototype, "points", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductsDto.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateProductsDto.prototype, "qty", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateProductsDto.prototype, "createdAt", void 0);
//# sourceMappingURL=update-products.dto.js.map