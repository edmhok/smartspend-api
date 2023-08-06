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
exports.SecondmatrixController = void 0;
const common_1 = require("@nestjs/common");
const secondmatrix_service_1 = require("./secondmatrix.service");
const create_secondmatrix_dto_1 = require("./dto/create-secondmatrix.dto");
const update_secondmatrix_dto_1 = require("./dto/update-secondmatrix.dto");
const user_service_1 = require("../user/user.service");
let SecondmatrixController = exports.SecondmatrixController = class SecondmatrixController {
    constructor(secondmatrixService, userService) {
        this.secondmatrixService = secondmatrixService;
        this.userService = userService;
    }
    async findAll() {
        return this.secondmatrixService.findAll();
    }
    async findOne(id) {
        return this.secondmatrixService.findOne(+id);
    }
    async findByDate(date) {
        return this.secondmatrixService.findByDate(date);
    }
    create(createSecondmatrixDto) {
        return this.secondmatrixService.create(createSecondmatrixDto);
    }
    update(id, updateSecondmatrixDto) {
        this.secondmatrixService.update(+id, updateSecondmatrixDto);
        return 'Updated';
    }
    remove(id) {
        this.secondmatrixService.remove(+id);
        return 'Deleted!';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecondmatrixController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SecondmatrixController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('createdAt/:date'),
    __param(0, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], SecondmatrixController.prototype, "findByDate", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_secondmatrix_dto_1.CreateSecondmatrixDto]),
    __metadata("design:returntype", void 0)
], SecondmatrixController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_secondmatrix_dto_1.UpdateSecondmatrixDto]),
    __metadata("design:returntype", void 0)
], SecondmatrixController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SecondmatrixController.prototype, "remove", null);
exports.SecondmatrixController = SecondmatrixController = __decorate([
    (0, common_1.Controller)('secondmatrix'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [secondmatrix_service_1.SecondmatrixService,
        user_service_1.UserService])
], SecondmatrixController);
//# sourceMappingURL=secondmatrix.controller.js.map