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
exports.AffiliateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const affiliate_entity_1 = require("./affiliate.entity");
const affiliate_repository_1 = require("./affiliate.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
let AffiliateService = exports.AffiliateService = class AffiliateService {
    constructor(affiliateRepository, userRepository) {
        this.affiliateRepository = affiliateRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.affiliateRepository.find({
            relations: ['user']
        });
    }
    async findOne(id) {
        const getOnebyId = this.affiliateRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user']
        });
        return getOnebyId;
    }
    async create(_affiliate) {
        const affiliate = new affiliate_entity_1.Affiliate();
        affiliate.name = _affiliate.name;
        if (_affiliate.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _affiliate.user_id },
            });
            affiliate.user = [user];
        }
        return this.affiliateRepository.save(affiliate);
    }
    async update(id, updateAffiliateDto) {
        const affiliate = await this.findOne(id);
        const { name, user_id } = updateAffiliateDto;
        affiliate.name = name;
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            affiliate.user = [user];
        }
        return await affiliate.save();
    }
    async remove(id) {
        await this.affiliateRepository.delete(id);
    }
};
exports.AffiliateService = AffiliateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [affiliate_repository_1.AffiliateRepository,
        user_repository_1.UserRepository])
], AffiliateService);
//# sourceMappingURL=affiliate.service.js.map