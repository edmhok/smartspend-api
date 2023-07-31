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
exports.SecondmatrixService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const secondmatrix_entity_1 = require("./secondmatrix.entity");
const secondmatrix_repository_1 = require("./secondmatrix.repository");
const user_entity_1 = require("../user/user.entity");
const user_repository_1 = require("../user/user.repository");
const affiliate_entity_1 = require("../affiliate/affiliate.entity");
const affiliate_repository_1 = require("../affiliate/affiliate.repository");
const firstmatrix_entity_1 = require("../firstmatrix/firstmatrix.entity");
const firstmatrix_repository_1 = require("../firstmatrix/firstmatrix.repository");
let SecondmatrixService = exports.SecondmatrixService = class SecondmatrixService {
    constructor(secondmatrixRepository, firstmatrixRepository, affiliateRepository, userRepository) {
        this.secondmatrixRepository = secondmatrixRepository;
        this.firstmatrixRepository = firstmatrixRepository;
        this.affiliateRepository = affiliateRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return this.secondmatrixRepository.find({
            relations: ['user', 'affiliate', 'firstmatrix'],
        });
    }
    async findOne(id) {
        const x = this.secondmatrixRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user', 'affiliate', 'firstmatrix']
        });
        return x;
    }
    async findByDate(createdAt) {
        return await this.secondmatrixRepository.find({
            where: {
                createdAt,
            },
        });
    }
    async create(_secondmatrix) {
        const secondmatrix = new secondmatrix_entity_1.Secondmatrix();
        secondmatrix.comment = _secondmatrix.comment;
        if (_secondmatrix.user_id) {
            const user = await this.userRepository.findOne({
                where: { id: _secondmatrix.user_id },
            });
            secondmatrix.user = [user];
        }
        if (_secondmatrix.affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: _secondmatrix.affiliate_id },
            });
            secondmatrix.affiliate = [affiliate];
        }
        if (_secondmatrix.firstmatrix_id) {
            const firstmatrix = await this.firstmatrixRepository.findOne({
                where: { id: _secondmatrix.firstmatrix_id },
            });
            secondmatrix.firstmatrix = [firstmatrix];
        }
        return this.secondmatrixRepository.save(secondmatrix);
    }
    async update(id, updateSecondmatrixDto) {
        const secondmatrix = await this.findOne(id);
        const { comment, user_id, affiliate_id, firstmatrix_id } = updateSecondmatrixDto;
        secondmatrix.comment = comment;
        if (user_id) {
            const user = await this.userRepository.findOne({
                where: { id: user_id },
            });
            secondmatrix.user = [user];
        }
        if (affiliate_id) {
            const affiliate = await this.affiliateRepository.findOne({
                where: { id: affiliate_id },
            });
            secondmatrix.affiliate = [affiliate];
        }
        if (firstmatrix_id) {
            const firstmatrix = await this.firstmatrixRepository.findOne({
                where: { id: firstmatrix_id },
            });
            secondmatrix.firstmatrix = [firstmatrix];
        }
        return await secondmatrix.save();
    }
    async remove(id) {
        await this.secondmatrixRepository.delete(id);
    }
};
exports.SecondmatrixService = SecondmatrixService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(secondmatrix_entity_1.Secondmatrix)),
    __param(1, (0, typeorm_1.InjectRepository)(firstmatrix_entity_1.Firstmatrix)),
    __param(2, (0, typeorm_1.InjectRepository)(affiliate_entity_1.Affiliate)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [secondmatrix_repository_1.SecondmatrixRepository,
        firstmatrix_repository_1.FirstmatrixRepository,
        affiliate_repository_1.AffiliateRepository,
        user_repository_1.UserRepository])
], SecondmatrixService);
//# sourceMappingURL=secondmatrix.service.js.map