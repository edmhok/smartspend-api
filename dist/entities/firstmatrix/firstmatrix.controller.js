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
exports.FirstmatrixController = void 0;
const common_1 = require("@nestjs/common");
const firstmatrix_service_1 = require("./firstmatrix.service");
const create_firstmatrix_dto_1 = require("./dto/create-firstmatrix.dto");
const update_firstmatrix_dto_1 = require("./dto/update-firstmatrix.dto");
const user_service_1 = require("../user/user.service");
const affiliate_service_1 = require("../affiliate/affiliate.service");
let FirstmatrixController = exports.FirstmatrixController = class FirstmatrixController {
    constructor(firstmatrixService, affiliateService, userService) {
        this.firstmatrixService = firstmatrixService;
        this.affiliateService = affiliateService;
        this.userService = userService;
    }
    async findAll() {
        return this.firstmatrixService.findAll();
    }
    async findOne(id) {
        return this.firstmatrixService.findOne(+id);
    }
    async findByDate(date) {
        return this.firstmatrixService.findByDate(date);
    }
    create(createFirstmatrixDto) {
        return this.firstmatrixService.create(createFirstmatrixDto);
    }
    update(id, updateFirstmatrixDto) {
        this.firstmatrixService.update(+id, updateFirstmatrixDto);
        return 'Updated';
    }
    remove(id) {
        this.firstmatrixService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirstmatrixController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FirstmatrixController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('date/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], FirstmatrixController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_firstmatrix_dto_1.CreateFirstmatrixDto]),
    __metadata("design:returntype", void 0)
], FirstmatrixController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_firstmatrix_dto_1.UpdateFirstmatrixDto]),
    __metadata("design:returntype", void 0)
], FirstmatrixController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FirstmatrixController.prototype, "remove", null);
exports.FirstmatrixController = FirstmatrixController = __decorate([
    (0, common_1.Controller)('firstmatrix'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => affiliate_service_1.AffiliateService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [firstmatrix_service_1.FirstmatrixService,
        affiliate_service_1.AffiliateService,
        user_service_1.UserService])
], FirstmatrixController);
//# sourceMappingURL=firstmatrix.controller.js.map