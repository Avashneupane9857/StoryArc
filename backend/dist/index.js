"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_auth_routes_1 = __importDefault(require("./routes/user/user_auth_routes"));
const blog_routes_1 = __importDefault(require("./routes/blogs/blog_routes"));
const blog_fet_routes_1 = __importDefault(require("./routes/blogs/blog_fet_routes"));
const user_1 = __importDefault(require("./routes/user/user"));
const cors_1 = __importDefault(require("cors"));
const auth_middelware_1 = require("./middleware/auth_middelware");
const upload_routes_1 = __importDefault(require("./routes/upload/upload_routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: '*',
}));
app.options('*', (0, cors_1.default)({
    origin: '*',
}));
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.get("/", (req, res) => {
    res.json({
        msg: "healthy",
    });
});
app.use("/api/v1/upload", upload_routes_1.default);
app.use("/api/v1/auth", user_auth_routes_1.default);
app.use("/api/v1/user", auth_middelware_1.authMiddleware, user_1.default);
app.use("/api/v1/blog", auth_middelware_1.authMiddleware, blog_fet_routes_1.default);
app.use("/api/v1/blog", auth_middelware_1.authMiddleware, blog_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Defined routes:');
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            console.log(`${Object.keys(r.route.methods)} ${r.route.path}`);
        }
    });
});
