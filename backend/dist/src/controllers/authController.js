"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username, cognitoId } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
            },
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error registering user: ${error.message}` });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: `Error logging in: ${error.message}` });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=authController.js.map