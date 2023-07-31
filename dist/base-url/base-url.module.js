"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUrlModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const base_url_entity_1 = require("./base-url.entity");
const base_url_service_1 = require("./base-url.service");
const base_url_controller_1 = require("./base-url.controller");
const base_url_repository_1 = require("./base-url.repository");
let BaseUrlModule = exports.BaseUrlModule = class BaseUrlModule {
};
exports.BaseUrlModule = BaseUrlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([base_url_entity_1.BaseUrl, base_url_repository_1.BaseUrlRepository])
        ],
        providers: [base_url_service_1.BaseUrlService],
        controllers: [base_url_controller_1.BaseUrlController]
    })
], BaseUrlModule);
//# sourceMappingURL=base-url.module.js.map