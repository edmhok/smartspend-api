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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_repository_1 = require("./user.repository");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    userCredential(query) {
        const x = this.userRepository.findOne({
            where: query,
        });
        return x;
    }
    findAll() {
        return this.userRepository.find({});
    }
    async findOne(id) {
        const x = this.userRepository.findOne({
            where: {
                id: id,
            }
        });
        return x;
    }
    async create(_user) {
        const user = new user_entity_1.User();
        user.email = _user.email;
        user.password = _user.password;
        user.membership = _user.membership;
        user.first_name = _user.first_name;
        user.middle_name = _user.middle_name;
        user.last_name = _user.last_name;
        user.birthdate = _user.birthdate;
        user.phone = _user.phone;
        user.address = _user.address;
        user.city = _user.city;
        user.state = _user.state;
        user.country = _user.country;
        user.zipcode = _user.zipcode;
        return this.userRepository.save(user);
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const { email, password, membership, first_name, middle_name, last_name, birthdate, phone, address, city, state, country, zipcode, } = updateUserDto;
        user.email = email;
        user.password = password;
        user.membership = membership;
        user.first_name = first_name;
        user.middle_name = middle_name;
        user.last_name = last_name;
        user.birthdate = birthdate;
        user.phone = phone;
        user.address = address;
        user.city = city;
        user.state = state;
        user.country = country;
        user.zipcode = zipcode;
        return await user.save();
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map