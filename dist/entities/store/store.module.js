"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const store_entity_1 = require("./store.entity");
const store_service_1 = require("./store.service");
const store_controller_1 = require("./store.controller");
const store_repository_1 = require("./store.repository");
const products_entity_1 = require("../products/products.entity");
const products_repository_1 = require("../products/products.repository");
const products_service_1 = require("../products/products.service");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
const user_service_1 = require("../user/user.service");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const secondmatrix_repository_1 = require("../secondmatrix/secondmatrix.repository");
let StoreModule = exports.StoreModule = class StoreModule {
};
exports.StoreModule = StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                store_entity_1.Store,
                store_repository_1.StoreRepository,
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
        controllers: [store_controller_1.StoreController],
        providers: [store_service_1.StoreService, user_service_1.UserService, products_service_1.ProductsService],
    })
], StoreModule);
//# sourceMappingURL=store.module.js.map