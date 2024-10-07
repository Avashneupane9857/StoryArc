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
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.uploder = void 0;
const cloudinary_1 = require("cloudinary");
const config = {
    cloud_name: "dq3oizrkk",
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
};
const uploder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('upload Body');
        const { file } = req.body;
        if (!file) {
            return res.status(400).json({ msg: "No file provided" });
        }
        console.log('Received File (Base64):');
        yield cloudinary_1.v2.config(config);
        console.log("Cloudinary Configured");
        const uploadResult = yield cloudinary_1.v2.uploader.upload(file, {
            folder: 'uploads',
        });
        console.log("uploaded Result", uploadResult.secure_url);
        res.json({
            msg: "Image uploaded successfully",
            imageUrl: uploadResult.secure_url,
        });
    }
    catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Failed to upload image Backend", error });
    }
});
exports.uploder = uploder;
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test upload route hit");
    console.log("Request body:", req.body);
    res.json({ message: "Test upload route working" });
});
exports.test = test;
