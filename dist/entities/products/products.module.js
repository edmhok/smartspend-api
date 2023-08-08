"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const products_repository_1 = require("./products.repository");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/user.repository");
let ProductsModule = exports.ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                products_entity_1.Products,
                products_repository_1.ProductsRepository,
                user_entity_1.User,
                user_repository_1.UserRepository,
            ]),
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService, user_service_1.UserService]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map