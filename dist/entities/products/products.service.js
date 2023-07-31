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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const products_repository_1 = require("./products.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(productsRepository, orderRepository, userRepository) {
        this.productsRepository = productsRepository;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.productsRepository.find({
            relations: ['user', 'order'],
        });
    }
    async findOne(id) {
        const x = this.productsRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user', 'order']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.productsRepository.find({
            where: {
                createdAt
            },
        });
    }
    async create(_products) {
        const products = new products_entity_1.Products();
        products.title = _products.title;
        products.type = _products.type;
        products.sku = _products.sku;
        products.stock_status = _products.stock_status;
        products.reserved = _products.reserved;
        products.selling_price = _products.selling_price;
        products.old_price = _products.old_price;
        products.purchase_price = _products.purchase_price;
        products.manufacturer = _products.manufacturer;
        products.commodity_group = _products.commodity_group;
        products.product_title = _products.product_title;
        products.variant_title = _products.variant_title;
        products.product_description = _products.product_description;
        products.image_url = _products.image_url;
        products.url_key = _products.url_key;
        products.item_id = _products.item_id;
        if (_products.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _products.user_id },
            });
            products.user = [user];
        }
        if (_products.order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: _products.order_id },
            });
            products.order = [order];
        }
        return this.productsRepository.save(products);
    }
    async update(id, updateProductsDto) {
        const products = await this.findOne(id);
        const { title, type, sku, stock_status, reserved, selling_price, old_price, purchase_price, manufacturer, commodity_group, product_title, variant_title, product_description, image_url, url_key, item_id, user_id, order_id } = updateProductsDto;
        products.title = title;
        products.type = type;
        products.sku = sku;
        products.stock_status = stock_status;
        products.reserved = reserved;
        products.selling_price = selling_price;
        products.old_price = old_price;
        products.purchase_price = purchase_price;
        products.manufacturer = manufacturer;
        products.commodity_group = commodity_group;
        products.product_title = product_title;
        products.variant_title = variant_title;
        products.product_description = product_description;
        products.image_url = image_url;
        products.url_key = url_key;
        products.item_id = item_id;
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            products.user = [user];
        }
        if (order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: order_id },
            });
            products.order = [order];
        }
        return await products.save();
    }
    async remove(id) {
        await this.productsRepository.delete(id);
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        order_repository_1.OrderRepository,
        user_repository_1.UserRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map