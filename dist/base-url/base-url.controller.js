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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUrlController = void 0;
const common_1 = require("@nestjs/common");
const base_url_service_1 = require("./base-url.service");
let BaseUrlController = exports.BaseUrlController = class BaseUrlController {
    constructor(baseUrlService) {
        this.baseUrlService = baseUrlService;
    }
    async getBaseUrl() {
        const { baseUrl } = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getBaseUrl`)
            .then(res => res.json());
        return this.baseUrlService.saveBaseUrl(baseUrl);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseUrlController.prototype, "getBaseUrl", null);
exports.BaseUrlController = BaseUrlController = __decorate([
    (0, common_1.Controller)('base-url'),
    __metadata("design:paramtypes", [base_url_service_1.BaseUrlService])
], BaseUrlController);
//# sourceMappingURL=base-url.controller.js.map