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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user.entity");
const typeorm_2 = require("typeorm");
const bcryptjs = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(user, resp) {
        const { name, email, password } = user;
        if (!name?.trim() || !email?.trim() || !password?.trim()) {
            return resp.status(400).send({ msg: 'Please enter all fields' });
        }
        try {
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                if (error.code === '23505') {
                    console.error('Unique constraint failed');
                    return resp
                        .status(500)
                        .send({ msg: 'There is already an account with this email' });
                }
            }
            return resp.status(500).send({ msg: error });
        }
    }
    async loginUser(user, resp) {
        const { email, password } = user;
        if (!email?.trim() || !password?.trim()) {
            return resp.status(400).send({ msg: 'Please enter all fields' });
        }
        const userDB = await this.userRepository.findOne({ where: { email } });
        if (!user || !(await bcryptjs.compare(password, userDB.password))) {
            return resp.status(400).send({ msg: 'Invalid credentials' });
        }
        const accessToken = (0, jsonwebtoken_1.sign)({ id: userDB.id }, 'access_secret', {
            expiresIn: 60 * 60,
        });
        const refreshToken = (0, jsonwebtoken_1.sign)({ id: userDB.id }, 'refresh_secret', {
            expiresIn: 24 * 60 * 60,
        });
        resp.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000 * 24,
        });
        resp.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 * 7,
        });
        resp.status(200).send({ msg: 'Logged in' });
    }
    async authUser(req, resp) {
        try {
            const accessToken = req.cookies['accessToken'];
            const payload = (0, jsonwebtoken_1.verify)(accessToken, 'access_secret');
            if (!payload) {
                return resp.status(401).send({ msg: 'Unauthorized' });
            }
            const user = await this.userRepository.findOne(payload.id);
            if (!user) {
                return resp.status(404).send({ msg: 'User not found' });
            }
            return resp.status(200).send({ user });
        }
        catch (error) {
            console.error(error);
            return resp.status(500).send({ msg: error });
        }
    }
    async refreshUser(req, resp) {
        try {
            const refreshToken = req.cookies['refreshToken'];
            const payload = (0, jsonwebtoken_1.verify)(refreshToken, 'refresh_secret');
            if (!payload) {
                return resp.status(401).send({ msg: 'Unauthorized' });
            }
            const accessToken = (0, jsonwebtoken_1.sign)({ id: payload.id }, 'access_secret', {
                expiresIn: 60 * 60,
            });
            resp.cookie('accessToken', accessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000 * 24,
            });
            return resp.status(200).send({ msg: 'Token refreshed' });
        }
        catch (error) {
            console.log(error);
            return resp.status(500).send({ msg: error });
        }
    }
    async logoutUser(req, resp) {
        resp.clearCookie('accessToken');
        resp.clearCookie('refreshToken');
        return resp.status(200).send({ msg: 'Logged out' });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map