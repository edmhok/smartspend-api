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
exports.UnilevelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unilevel_entity_1 = require("./unilevel.entity");
const unilevel_repository_1 = require("./unilevel.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
let UnilevelService = exports.UnilevelService = class UnilevelService {
    constructor(unilevelRepository, affiliateRepository, orderRepository) {
        this.unilevelRepository = unilevelRepository;
        this.affiliateRepository = affiliateRepository;
        this.orderRepository = orderRepository;
    }
    findAll() {
        return this.unilevelRepository.find({
            relations: ['affiliate', 'order'],
        });
    }
    async findOne(id) {
        const x = this.unilevelRepository.findOne({
            where: {
                id: id,
            },
            relations: ['affiliate', 'order']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.unilevelRepository.find({
            where: {
                createdAt,
            },
        });
    }
    async create(_unilevel) {
        const unilevel = new unilevel_entity_1.Unilevel();
        unilevel.commission_fee = _unilevel.commission_fee;
        unilevel.comment = _unilevel.comment;
        if (_unilevel.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _unilevel.affiliate_id },
            });
            unilevel.affiliate = [affiliate];
        }
        if (_unilevel.order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: _unilevel.order_id },
            });
            unilevel.order = [order];
        }
        return this.unilevelRepository.save(unilevel);
    }
    async update(id, updateUnilevelDto) {
        const unilevel = await this.findOne(id);
        const { commission_fee, comment, affiliate_id, order_id } = updateUnilevelDto;
        unilevel.commission_fee = commission_fee;
        unilevel.comment = comment;
        if (order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: order_id },
            });
            unilevel.order = [order];
        }
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            unilevel.affiliate = [affiliate];
        }
        return await unilevel.save();
    }
    async remove(id) {
        await this.unilevelRepository.delete(id);
    }
};
exports.UnilevelService = UnilevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unilevel_entity_1.Unilevel)),
    __param(1, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [unilevel_repository_1.UnilevelRepository,
        affiliate_repository_1.AffiliateRepository,
        order_repository_1.OrderRepository])
], UnilevelService);
//# sourceMappingURL=unilevel.service.js.map