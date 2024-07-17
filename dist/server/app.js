"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const readingController_1 = require("./controllers/readingController");
const app = (0, express_1.default)();
// Use CORS middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/api/getReading', readingController_1.getReading);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`OpenAI API Key: ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`);
});
