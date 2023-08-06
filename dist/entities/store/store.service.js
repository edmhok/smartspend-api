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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const store_entity_1 = require("./store.entity");
const store_repository_1 = require("./store.repository");
const products_entity_1 = require("../products/products.entity");
const products_repository_1 = require("../products/products.repository");
const user_repository_1 = require("../user/user.repository");
const user_entity_1 = require("../user/user.entity");
let StoreService = exports.StoreService = class StoreService {
    constructor(storeRepository, userRepository, productsRepository) {
        this.storeRepository = storeRepository;
        this.userRepository = userRepository;
        this.productsRepository = productsRepository;
    }
    findAll() {
        return this.storeRepository.find({
            relations: ['products', 'user']
        });
    }
    async findOne(id) {
        const x = this.storeRepository.findOne({
            where: {
                id: id,
            },
            relations: ['products', 'user']
        });
        return x;
    }
    async create(_store) {
        const store = new store_entity_1.Store();
        store.name = _store.name;
        store.status = _store.status;
        if (_store.products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: _store.products_id },
            });
            store.products = [products];
        }
        if (_store.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _store.user_id },
            });
            store.user = [user];
        }
        return this.storeRepository.save(store);
    }
    async update(id, updateStoreDto) {
        const store = await this.findOne(id);
        const { name, status, products_id, user_id } = updateStoreDto;
        store.name = name;
        store.status = status;
        if (products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: products_id },
            });
            store.products = [products];
        }
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            store.user = [user];
        }
        return await store.save();
    }
    async remove(id) {
        await this.storeRepository.delete(id);
    }
};
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(store_entity_1.Store)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __metadata("design:paramtypes", [store_repository_1.StoreRepository,
        user_repository_1.UserRepository,
        products_repository_1.ProductsRepository])
], StoreService);
//# sourceMappingURL=store.service.js.map