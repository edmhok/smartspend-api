"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const user_repository_1 = require("./user.repository");
const products_entity_1 = require("../products/products.entity");
const products_repository_1 = require("../products/products.repository");
const products_service_1 = require("../products/products.service");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
const order_service_1 = require("../order/order.service");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_service_1 = require("../affiliate/affiliate.service");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_service_1 = require("../firstmatrix/firstmatrix.service");
const secondmatrix_repository_1 = require("../secondmatrix/secondmatrix.repository");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const secondmatrix_service_1 = require("../secondmatrix/secondmatrix.service");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                user_repository_1.UserRepository,
                products_entity_1.Products,
                products_repository_1.ProductsRepository,
                order_entity_1.Order,
                order_repository_1.OrderRepository,
                affiliate_entity_1.Affiliate,
                affiliate_repository_1.AffiliateRepository,
                firstmatrix_entity_1.Firstmatrix,
                firstmatrix_repository_1.FirstmatrixRepository,
                secondmatrix_entity_1.Secondmatrix,
                secondmatrix_repository_1.SecondmatrixRepository,
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, products_service_1.ProductsService, order_service_1.OrderService, affiliate_service_1.AffiliateService, firstmatrix_service_1.FirstmatrixService, secondmatrix_service_1.SecondmatrixService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map