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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnilevelController = void 0;
const common_1 = require("@nestjs/common");
const unilevel_service_1 = require("./unilevel.service");
const create_unilevel_dto_1 = require("./dto/create-unilevel.dto");
const update_unilevel_dto_1 = require("./dto/update-unilevel.dto");
const affiliate_service_1 = require("../affiliate/affiliate.service");
const order_service_1 = require("../order/order.service");
let UnilevelController = exports.UnilevelController = class UnilevelController {
    constructor(unilevelService, affiliateService, orderService) {
        this.unilevelService = unilevelService;
        this.affiliateService = affiliateService;
        this.orderService = orderService;
    }
    async findAll() {
        return this.unilevelService.findAll();
    }
    async findOne(id) {
        return this.unilevelService.findOne(+id);
    }
    async findByDate(date) {
        return this.unilevelService.findByDate(date);
    }
    create(createUnilevelDto) {
        return this.unilevelService.create(createUnilevelDto);
    }
    update(id, updateUnilevelDto) {
        this.unilevelService.update(+id, updateUnilevelDto);
        return 'Updated';
    }
    remove(id) {
        this.unilevelService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnilevelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnilevelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('createdAt/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], UnilevelController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unilevel_dto_1.CreateUnilevelDto]),
    __metadata("design:returntype", void 0)
], UnilevelController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_unilevel_dto_1.UpdateUnilevelDto]),
    __metadata("design:returntype", void 0)
], UnilevelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnilevelController.prototype, "remove", null);
exports.UnilevelController = UnilevelController = __decorate([
    (0, common_1.Controller)('unilevel'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => affiliate_service_1.AffiliateService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => order_service_1.OrderService))),
    __metadata("design:paramtypes", [unilevel_service_1.UnilevelService,
        affiliate_service_1.AffiliateService,
        order_service_1.OrderService])
], UnilevelController);
//# sourceMappingURL=unilevel.controller.js.map