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
let ProductsService = exports.ProductsService = class ProductsService {
    constructor(productsRepository, userRepository) {
        this.productsRepository = productsRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.productsRepository.find({});
    }
    async findOne(id) {
        const x = this.productsRepository.findOne({
            where: {
                id: id,
            }
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
        products.description = _products.description;
        products.price = _products.price;
        products.sku = _products.sku;
        products.points = _products.points;
        products.qty = _products.qty;
        return this.productsRepository.save(products);
    }
    async update(id, updateProductsDto) {
        const products = await this.findOne(id);
        const { title, description, price, sku, points, qty } = updateProductsDto;
        products.title = title;
        products.description = description;
        products.price = price;
        products.sku = sku;
        products.points = points;
        products.qty = qty;
        return await products.save();
    }
    async remove(id) {
        await this.productsRepository.delete(id);
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        user_repository_1.UserRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map