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
exports.FirstmatrixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const firstmatrix_entity_1 = require("./firstmatrix.entity");
const firstmatrix_repository_1 = require("./firstmatrix.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
let FirstmatrixService = exports.FirstmatrixService = class FirstmatrixService {
    constructor(firstmatrixRepository, affiliateRepository, orderRepository) {
        this.firstmatrixRepository = firstmatrixRepository;
        this.affiliateRepository = affiliateRepository;
        this.orderRepository = orderRepository;
    }
    findAll() {
        return this.firstmatrixRepository.find({
            relations: ['affiliate', 'order'],
        });
    }
    async findOne(id) {
        const x = this.firstmatrixRepository.findOne({
            where: {
                id: id,
            },
            relations: ['affiliate', 'order']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.firstmatrixRepository.find({
            where: {
                createdAt,
            },
        });
    }
    async create(_firstmatrix) {
        const firstmatrix = new firstmatrix_entity_1.Firstmatrix();
        firstmatrix.commission_fee = _firstmatrix.commission_fee;
        firstmatrix.comment = _firstmatrix.comment;
        if (_firstmatrix.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _firstmatrix.affiliate_id },
            });
            firstmatrix.affiliate = [affiliate];
        }
        if (_firstmatrix.order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: _firstmatrix.order_id },
            });
            firstmatrix.order = [order];
        }
        return this.firstmatrixRepository.save(firstmatrix);
    }
    async update(id, updateFirstmatrixDto) {
        const firstmatrix = await this.findOne(id);
        const { commission_fee, comment, affiliate_id, order_id } = updateFirstmatrixDto;
        firstmatrix.commission_fee = commission_fee;
        firstmatrix.comment = comment;
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            firstmatrix.affiliate = [affiliate];
        }
        if (order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: order_id },
            });
            firstmatrix.order = [order];
        }
        return await firstmatrix.save();
    }
    async remove(id) {
        await this.firstmatrixRepository.delete(id);
    }
};
exports.FirstmatrixService = FirstmatrixService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(firstmatrix_entity_1.Firstmatrix)),
    __param(1, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [firstmatrix_repository_1.FirstmatrixRepository,
        affiliate_repository_1.AffiliateRepository,
        order_repository_1.OrderRepository])
], FirstmatrixService);
//# sourceMappingURL=firstmatrix.service.js.map