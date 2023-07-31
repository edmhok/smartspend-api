"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const user_module_1 = require("../entities/user/user.module");
const passport_1 = require("@nestjs/passport");
const local_strategy_1 = require("./strategy/local.strategy");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const constants_1 = require("./constants");
const user_service_1 = require("../entities/user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user/user.entity");
const products_entity_1 = require("../entities/products/products.entity");
const order_entity_1 = require("../entities/order/order.entity");
const affiliate_entity_1 = require("../entities/affiliate/affiliate.entity");
const firstmatrix_entity_1 = require("../entities/firstmatrix/firstmatrix.entity");
const secondmatrix_entity_1 = require("../entities/secondmatrix/secondmatrix.entity");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, products_entity_1.Products, order_entity_1.Order, affiliate_entity_1.Affiliate, firstmatrix_entity_1.Firstmatrix, secondmatrix_entity_1.Secondmatrix]),
            user_entity_1.User,
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '24h' },
            }),
        ],
        providers: [user_service_1.UserService, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [user_service_1.UserService, auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map