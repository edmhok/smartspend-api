"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./authentication/auth.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./entities/user/user.entity");
const user_module_1 = require("./entities/user/user.module");
const products_entity_1 = require("./entities/products/products.entity");
const products_module_1 = require("./entities/products/products.module");
const order_entity_1 = require("./entities/order/order.entity");
const order_module_1 = require("./entities/order/order.module");
const affiliate_entity_1 = require("./entities/affiliate/affiliate.entity");
const affiliate_module_1 = require("./entities/affiliate/affiliate.module");
const firstmatrix_module_1 = require("./entities/firstmatrix/firstmatrix.module");
const firstmatrix_entity_1 = require("./entities/firstmatrix/firstmatrix.entity");
const secondmatrix_entity_1 = require("./entities/secondmatrix/secondmatrix.entity");
const secondmatrix_module_1 = require("./entities/secondmatrix/secondmatrix.module");
const unilevel_module_1 = require("./entities/unilevel/unilevel.module");
const unilevel_entity_1 = require("./entities/unilevel/unilevel.entity");
const store_module_1 = require("./entities/store/store.module");
const store_entity_1 = require("./entities/store/store.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [
                    user_entity_1.User,
                    products_entity_1.Products,
                    order_entity_1.Order,
                    store_entity_1.Store,
                    affiliate_entity_1.Affiliate,
                    unilevel_entity_1.Unilevel,
                    firstmatrix_entity_1.Firstmatrix,
                    secondmatrix_entity_1.Secondmatrix,
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            products_module_1.ProductsModule,
            order_module_1.OrderModule,
            affiliate_module_1.AffiliateModule,
            store_module_1.StoreModule,
            unilevel_module_1.UnilevelModule,
            firstmatrix_module_1.FirstmatrixModule,
            secondmatrix_module_1.SecondmatrixModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map