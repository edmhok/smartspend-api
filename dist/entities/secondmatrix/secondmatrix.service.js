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
exports.SecondmatrixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const secondmatrix_entity_1 = require("./secondmatrix.entity");
const secondmatrix_repository_1 = require("./secondmatrix.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
let SecondmatrixService = exports.SecondmatrixService = class SecondmatrixService {
    constructor(secondmatrixRepository, affiliateRepository, orderRepository) {
        this.secondmatrixRepository = secondmatrixRepository;
        this.affiliateRepository = affiliateRepository;
        this.orderRepository = orderRepository;
    }
    findAll() {
        return this.secondmatrixRepository.find({
            relations: ['affiliate', 'order'],
        });
    }
    async findOne(id) {
        const x = this.secondmatrixRepository.findOne({
            where: {
                id: id,
            },
            relations: ['affiliate', 'order']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.secondmatrixRepository.find({
            where: {
                createdAt,
            },
        });
    }
    async create(_secondmatrix) {
        const secondmatrix = new secondmatrix_entity_1.Secondmatrix();
        secondmatrix.level = _secondmatrix.level;
        secondmatrix.commission_fee = _secondmatrix.commission_fee;
        secondmatrix.comment = _secondmatrix.comment;
        if (_secondmatrix.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _secondmatrix.affiliate_id },
            });
            secondmatrix.affiliate = [affiliate];
        }
        if (_secondmatrix.order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: _secondmatrix.order_id },
            });
            secondmatrix.order = [order];
        }
        return this.secondmatrixRepository.save(secondmatrix);
    }
    async update(id, updateSecondmatrixDto) {
        const secondmatrix = await this.findOne(id);
        const { level, commission_fee, comment, affiliate_id, order_id } = updateSecondmatrixDto;
        secondmatrix.level = level;
        secondmatrix.commission_fee = commission_fee;
        secondmatrix.comment = comment;
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            secondmatrix.affiliate = [affiliate];
        }
        if (order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: order_id },
            });
            secondmatrix.order = [order];
        }
        return await secondmatrix.save();
    }
    async remove(id) {
        await this.secondmatrixRepository.delete(id);
    }
};
exports.SecondmatrixService = SecondmatrixService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(secondmatrix_entity_1.Secondmatrix)),
    __param(1, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [secondmatrix_repository_1.SecondmatrixRepository,
        affiliate_repository_1.AffiliateRepository,
        order_repository_1.OrderRepository])
], SecondmatrixService);
//# sourceMappingURL=secondmatrix.service.js.map