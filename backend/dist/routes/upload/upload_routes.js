"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("../../controller/upload/upload");
const uploadRoutes = express_1.default.Router();
uploadRoutes.post("/", upload_1.uploder);
uploadRoutes.post("/test", upload_1.test);
exports.default = uploadRoutes;
