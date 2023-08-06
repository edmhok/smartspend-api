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
exports.Unilevel = void 0;
const typeorm_1 = require("typeorm");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const order_entity_1 = require("../order/order.entity");
let Unilevel = exports.Unilevel = class Unilevel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unilevel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.unilevel, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Unilevel.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => affiliate_entity_1.Affiliate, (affiliate) => affiliate.unilevel, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Unilevel.prototype, "affiliate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Unilevel.prototype, "commission_fee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Unilevel.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Unilevel.prototype, "createdAt", void 0);
exports.Unilevel = Unilevel = __decorate([
    (0, typeorm_1.Entity)({ name: 'unilevel' })
], Unilevel);
//# sourceMappingURL=unilevel.entity.js.map