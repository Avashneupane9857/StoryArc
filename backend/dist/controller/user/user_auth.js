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
exports.signinController = exports.signup = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const common_1 = require("@sidd123/common");
const db_1 = __importDefault(require("../../db"));
const prisma = db_1.default;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { success } = common_1.signupInput.safeParse(body);
        if (!success) {
            return res.status(400).json({ error: "Type Validation Failed" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(body.password, 10);
        const user = yield prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                name: body.name,
            },
        });
        const payload = {
            email: user.email,
            id: user.id,
            name: user.name,
        };
        const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET);
        return res.status(200).json({ token });
    }
    catch (e) {
        console.log(e);
        return res.status(400).json({ error: e.message });
    }
});
exports.signup = signup;
const signinController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { success } = common_1.signupInput.safeParse(body);
        if (!success) {
            return res.status(400).json({ error: "Type Validation Failed" });
        }
        const user = yield prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });
        if (!user) {
            return res.status(401).json({ error: 'User Not Found' });
        }
        try {
            const isValid = yield bcrypt_1.default.compare(body.password, user.password);
            if (!isValid) {
                return res.status(401).json({ error: 'Invalid Password' });
            }
        }
        catch (err) {
            console.error("Error in bcrypt.compare:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const payload = {
            email: user.email,
            id: user.id,
            name: user.name,
            exp: Math.floor(Date.now() / 1000) + 60 * 30,
        };
        const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET);
        return res.status(200).json({ token });
    }
    catch (e) {
        console.log(e);
        return res.status(400).json({ error: e.message });
    }
});
exports.signinController = signinController;
