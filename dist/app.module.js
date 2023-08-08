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
const products_entity_1 = require("./entities/products/products.entity");
const merchant_entity_1 = require("./entities/merchant/merchant.entity");
const transaction_entity_1 = require("./entities/transaction/transaction.entity");
const patron_entity_1 = require("./entities/patron/patron.entity");
const merchant_module_1 = require("./entities/merchant/merchant.module");
const patron_module_1 = require("./entities/patron/patron.module");
const transaction_module_1 = require("./entities/transaction/transaction.module");
const products_module_1 = require("./entities/products/products.module");
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
                    merchant_entity_1.Merchant,
                    patron_entity_1.Patron,
                    transaction_entity_1.Transaction,
                    products_entity_1.Products
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            auth_module_1.AuthModule,
            merchant_module_1.MerchantModule,
            patron_module_1.PatronModule,
            transaction_module_1.TransactionModule,
            products_module_1.ProductsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map