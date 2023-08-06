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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const products_entity_1 = require("../products/products.entity");
const unilevel_entity_1 = require("../unilevel/unilevel.entity");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
let Order = exports.Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unilevel_entity_1.Unilevel, (unilevel) => unilevel.order, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Order.prototype, "unilevel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => firstmatrix_entity_1.Firstmatrix, (firstmatrix) => firstmatrix.order, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Order.prototype, "firstmatrix", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => secondmatrix_entity_1.Secondmatrix, (secondmatrix) => secondmatrix.order, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Order.prototype, "secondmatrix", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Products, (products) => products.order, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.order, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => affiliate_entity_1.Affiliate, (affiliate) => affiliate.order, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Order.prototype, "affiliate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "item_subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "item_qty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "shipping", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "shipping_fee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "tracking", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'order' })
], Order);
//# sourceMappingURL=order.entity.js.map