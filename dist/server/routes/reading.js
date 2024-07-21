"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const readingController_1 = require("../api/readingController");
const router = express_1.default.Router();
const corsOptions = {
    origin: ['http://localhost:3000', 'https://www.ai-tarot.online'],
    optionsSuccessStatus: 200,
};
router.use((0, cors_1.default)(corsOptions));
// Content-Type kontrolü için middleware
const checkContentType = (req, res, next) => {
    if (req.headers['content-type'] !== 'application/json') {
        return res
            .status(415)
            .send('Unsupported Media Type. Expected application/json');
    }
    next();
};
router.options('/getReading', (0, cors_1.default)(corsOptions), (req, res) => {
    res.sendStatus(200);
});
// getReading route'una checkContentType middleware'ini ekleyin
router.post('/getReading', (0, cors_1.default)(corsOptions), checkContentType, readingController_1.getReading);
exports.default = router;
