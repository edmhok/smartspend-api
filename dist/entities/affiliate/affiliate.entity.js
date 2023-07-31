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
exports.Affiliate = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
let Affiliate = exports.Affiliate = class Affiliate extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Affiliate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.affiliate, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Affiliate.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => firstmatrix_entity_1.Firstmatrix, (firstmatrix) => firstmatrix.affiliate, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Affiliate.prototype, "firstmatrix", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => secondmatrix_entity_1.Secondmatrix, (secondmatrix) => secondmatrix.affiliate, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Affiliate.prototype, "secondmatrix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Affiliate.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Affiliate.prototype, "enrolled_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Affiliate.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Affiliate.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Affiliate.prototype, "createdAt", void 0);
exports.Affiliate = Affiliate = __decorate([
    (0, typeorm_1.Entity)({ name: 'affiliate' })
], Affiliate);
//# sourceMappingURL=affiliate.entity.js.map