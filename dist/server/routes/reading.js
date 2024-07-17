"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const readingController_1 = require("../controllers/readingController");
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
router.use((0, cors_1.default)(corsOptions));
router.options('/getReading', (0, cors_1.default)(corsOptions), (req, res) => {
    res.sendStatus(200);
});
router.post('/getReading', (0, cors_1.default)(corsOptions), readingController_1.getReading);
exports.default = router;
