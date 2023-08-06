"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const affiliate_entity_1 = require("./affiliate.entity");
const affiliate_service_1 = require("./affiliate.service");
const affiliate_controller_1 = require("./affiliate.controller");
const affiliate_repository_1 = require("./affiliate.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
const secondmatrix_entity_1 = require("../secondmatrix/secondmatrix.entity");
const secondmatrix_repository_1 = require("../secondmatrix/secondmatrix.repository");
const order_entity_1 = require("../order/order.entity");
const order_repository_1 = require("../order/order.repository");
const unilevel_entity_1 = require("../unilevel/unilevel.entity");
const unilevel_repository_1 = require("../unilevel/unilevel.repository");
const products_repository_1 = require("../products/products.repository");
const products_entity_1 = require("../products/products.entity");
const store_repository_1 = require("../store/store.repository");
const store_entity_1 = require("../store/store.entity");
let AffiliateModule = exports.AffiliateModule = class AffiliateModule {
};
exports.AffiliateModule = AffiliateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                affiliate_entity_1.Affiliate,
                affiliate_repository_1.AffiliateRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
                order_entity_1.Order,
                order_repository_1.OrderRepository,
                unilevel_entity_1.Unilevel,
                unilevel_repository_1.UnilevelRepository,
                firstmatrix_entity_1.Firstmatrix,
                firstmatrix_repository_1.FirstmatrixRepository,
                secondmatrix_entity_1.Secondmatrix,
                secondmatrix_repository_1.SecondmatrixRepository,
                products_entity_1.Products,
                products_repository_1.ProductsRepository,
                store_entity_1.Store,
                store_repository_1.StoreRepository,
            ]),
        ],
        controllers: [affiliate_controller_1.AffiliateController],
        providers: [affiliate_service_1.AffiliateService, user_service_1.UserService]
    })
], AffiliateModule);
//# sourceMappingURL=affiliate.module.js.map