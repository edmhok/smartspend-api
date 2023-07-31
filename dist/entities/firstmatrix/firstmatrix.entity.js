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
exports.Firstmatrix = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
let Firstmatrix = exports.Firstmatrix = class Firstmatrix extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Firstmatrix.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => secondmatrix_entity_1.Secondmatrix, (secondmatrix) => secondmatrix.firstmatrix, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Firstmatrix.prototype, "secondmatrix", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.firstmatrix, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Firstmatrix.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => affiliate_entity_1.Affiliate, (affiliate) => affiliate.firstmatrix, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Firstmatrix.prototype, "affiliate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Firstmatrix.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Firstmatrix.prototype, "createdAt", void 0);
exports.Firstmatrix = Firstmatrix = __decorate([
    (0, typeorm_1.Entity)({ name: 'firstmatrix' })
], Firstmatrix);
//# sourceMappingURL=firstmatrix.entity.js.map