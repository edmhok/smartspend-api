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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_repository_1 = require("./user.repository");
const products_entity_1 = require("../products/products.entity");
const products_repository_1 = require("../products/products.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const secondmatrix_repository_1 = require("../secondmatrix/secondmatrix.repository");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, productsRepository, orderRepository, affiliateRepository, firstmatrixRepository, secondmatrixRepository) {
        this.userRepository = userRepository;
        this.productsRepository = productsRepository;
        this.orderRepository = orderRepository;
        this.affiliateRepository = affiliateRepository;
        this.firstmatrixRepository = firstmatrixRepository;
        this.secondmatrixRepository = secondmatrixRepository;
    }
    findAll() {
        return this.userRepository.find({
            relations: ['products', 'order', 'affiliate', 'firstmatrix', 'secondmatrix']
        });
    }
    userCredential(query) {
        const x = this.userRepository.findOne({
            where: query,
            relations: ['products', 'order', 'affiliate', 'firstmatrix', 'secondmatrix'],
        });
        return x;
    }
    async findOne(id) {
        const x = this.userRepository.findOne({
            where: {
                id: id,
            },
            relations: ['products', 'order', 'affiliate', 'firstmatrix', 'secondmatrix']
        });
        return x;
    }
    async create(_user) {
        const user = new user_entity_1.User();
        user.username = _user.username;
        user.password = _user.password;
        user.membership = _user.membership;
        user.commission_fee = _user.commission_fee;
        user.first_name = _user.first_name;
        user.middle_name = _user.middle_name;
        user.last_name = _user.last_name;
        user.birthdate = _user.birthdate;
        user.phone = _user.phone;
        user.address = _user.address;
        user.city = _user.city;
        user.state = _user.state;
        user.country = _user.country;
        user.zipcode = _user.zipcode;
        if (_user.products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: _user.products_id },
            });
            user.products = [products];
        }
        if (_user.order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: _user.order_id },
            });
            user.order = [order];
        }
        if (_user.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _user.affiliate_id },
            });
            user.affiliate = [affiliate];
        }
        if (_user.firstmatrix_id) {
            const firstmatrix = await this.firstmatrixRepository.findOne({
                where: { id: _user.firstmatrix_id },
            });
            user.firstmatrix = [firstmatrix];
        }
        if (_user.secondmatrix_id) {
            const secondmatrix = await this.secondmatrixRepository.findOne({
                where: { id: _user.secondmatrix_id },
            });
            user.secondmatrix = [secondmatrix];
        }
        return this.userRepository.save(user);
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const { username, password, membership, commission_fee, first_name, middle_name, last_name, birthdate, phone, address, city, state, country, zipcode, products_id, order_id, affiliate_id, firstmatrix_id, secondmatrix_id, } = updateUserDto;
        user.username = username;
        user.password = password;
        user.membership = membership;
        user.commission_fee = commission_fee;
        user.first_name = first_name;
        user.middle_name = middle_name;
        user.last_name = last_name;
        user.birthdate = birthdate;
        user.phone = phone;
        user.address = address;
        user.city = city;
        user.state = state;
        user.country = country;
        user.zipcode = zipcode;
        if (products_id) {
            const products = await this.productsRepository.findOne({
                where: { id: products_id },
            });
            user.products = [products];
        }
        if (order_id) {
            const order = await this.orderRepository.findOne({
                where: { id: order_id },
            });
            user.order = [order];
        }
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            user.affiliate = [affiliate];
        }
        if (firstmatrix_id) {
            const firstmatrix = await this.firstmatrixRepository.findOne({
                where: { id: firstmatrix_id },
            });
            user.firstmatrix = [firstmatrix];
        }
        if (secondmatrix_id) {
            const secondmatrix = await this.secondmatrixRepository.findOne({
                where: { id: secondmatrix_id },
            });
            user.secondmatrix = [secondmatrix];
        }
        return await user.save();
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(3, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(4, (0, typeorm_1.InjectRepository)(firstmatrix_entity_1.Firstmatrix)),
    __param(5, (0, typeorm_1.InjectRepository)(secondmatrix_entity_1.Secondmatrix)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        products_repository_1.ProductsRepository,
        order_repository_1.OrderRepository,
        affiliate_repository_1.AffiliateRepository,
        firstmatrix_repository_1.FirstmatrixRepository,
        secondmatrix_repository_1.SecondmatrixRepository])
], UserService);
//# sourceMappingURL=user.service.js.map