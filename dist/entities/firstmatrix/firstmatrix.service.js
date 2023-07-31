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
exports.FirstmatrixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const firstmatrix_entity_1 = require("./firstmatrix.entity");
const firstmatrix_repository_1 = require("./firstmatrix.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
let FirstmatrixService = exports.FirstmatrixService = class FirstmatrixService {
    constructor(firstmatrixRepository, affiliateRepository, userRepository) {
        this.firstmatrixRepository = firstmatrixRepository;
        this.affiliateRepository = affiliateRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.firstmatrixRepository.find({
            relations: ['user'],
        });
    }
    async findOne(id) {
        const x = this.firstmatrixRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.firstmatrixRepository.find({
            where: {
                createdAt,
            },
        });
    }
    async create(_firstmatrix) {
        const firstmatrix = new firstmatrix_entity_1.Firstmatrix();
        firstmatrix.comment = _firstmatrix.comment;
        if (_firstmatrix.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _firstmatrix.user_id },
            });
            firstmatrix.user = [user];
        }
        if (_firstmatrix.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _firstmatrix.affiliate_id },
            });
            firstmatrix.affiliate = [affiliate];
        }
        return this.firstmatrixRepository.save(firstmatrix);
    }
    async update(id, updateFirstmatrixDto) {
        const firstmatrix = await this.findOne(id);
        const { comment, user_id, affiliate_id } = updateFirstmatrixDto;
        firstmatrix.comment = comment;
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            firstmatrix.user = [user];
        }
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            firstmatrix.affiliate = [affiliate];
        }
        return await firstmatrix.save();
    }
    async remove(id) {
        await this.firstmatrixRepository.delete(id);
    }
};
exports.FirstmatrixService = FirstmatrixService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(firstmatrix_entity_1.Firstmatrix)),
    __param(1, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [firstmatrix_repository_1.FirstmatrixRepository,
        affiliate_repository_1.AffiliateRepository,
        user_repository_1.UserRepository])
], FirstmatrixService);
//# sourceMappingURL=firstmatrix.service.js.map