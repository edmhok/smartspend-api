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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./order.entity");
const order_repository_1 = require("./order.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
const products_entity_1 = require("../products/products.entity");
const products_repository_1 = require("../products/products.repository");
let OrderService = exports.OrderService = class OrderService {
    constructor(orderRepository, userRepository, productsRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productsRepository = productsRepository;
    }
    findAll() {
        return this.orderRepository.find({
            relations: ['user', 'products'],
        });
    }
    async findOne(id) {
        const x = this.orderRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user', 'products']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.orderRepository.find({
            where: {
                createdAt
            },
        });
    }
    async create(_order) {
        const order = new order_entity_1.Order();
        order.status = _order.status;
        order.item_subtotal = _order.item_subtotal;
        order.item_qty = _order.item_qty;
        order.discount = _order.discount;
        order.shipping = _order.shipping;
        order.shipping_fee = _order.shipping_fee;
        order.isPaid = _order.isPaid;
        order.payment_method = _order.payment_method;
        order.tracking = _order.tracking;
        if (_order.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _order.user_id },
            });
            order.user = [user];
        }
        if (_order.products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: _order.products_id },
            });
            order.products = [products];
        }
        return this.orderRepository.save(order);
    }
    async update(id, updateOrderDto) {
        const order = await this.findOne(id);
        const { date, status, item_subtotal, item_qty, discount, shipping, shipping_fee, isPaid, payment_method, tracking, user_id, products_id } = updateOrderDto;
        order.status = status;
        order.item_subtotal = item_subtotal;
        order.item_qty = item_qty;
        order.discount = discount;
        order.shipping = shipping;
        order.shipping_fee = shipping_fee;
        order.isPaid = isPaid;
        order.payment_method = payment_method;
        order.tracking = tracking;
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            order.user = [user];
        }
        if (products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: products_id },
            });
            order.products = [products];
        }
        return await order.save();
    }
    async remove(id) {
        await this.productsRepository.delete(id);
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        user_repository_1.UserRepository,
        products_repository_1.ProductsRepository])
], OrderService);
//# sourceMappingURL=order.service.js.map