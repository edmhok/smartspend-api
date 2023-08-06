"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./order.entity");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const order_repository_1 = require("./order.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const products_entity_1 = require("../products/products.entity");
const products_service_1 = require("../products/products.service");
const products_repository_1 = require("../products/products.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const secondmatrix_repository_1 = require("../secondmatrix/secondmatrix.repository");
const store_repository_1 = require("../store/store.repository");
const store_entity_1 = require("../store/store.entity");
const unilevel_repository_1 = require("../unilevel/unilevel.repository");
const unilevel_entity_1 = require("../unilevel/unilevel.entity");
let OrderModule = exports.OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                order_entity_1.Order,
                order_repository_1.OrderRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                products_entity_1.Products,
                products_repository_1.ProductsRepository,
                affiliate_entity_1.Affiliate,
                affiliate_repository_1.AffiliateRepository,
                unilevel_entity_1.Unilevel,
                unilevel_repository_1.UnilevelRepository,
                firstmatrix_entity_1.Firstmatrix,
                firstmatrix_repository_1.FirstmatrixRepository,
                secondmatrix_entity_1.Secondmatrix,
                secondmatrix_repository_1.SecondmatrixRepository,
                store_entity_1.Store,
                store_repository_1.StoreRepository
            ]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, user_service_1.UserService, products_service_1.ProductsService]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map