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
exports.getReading = void 0;
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const getReading = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { questionType, selectedCards, question, birthChartInfo } = req.body;
    let prompt = `You are a tarot card reader. Interpret the following cards for a ${questionType} reading:\n`;
    selectedCards.forEach((card, index) => {
        prompt += `${index + 1}. ${card.name} (${card.isReversed ? 'Reversed' : 'Upright'}): ${card.description}\n`;
    });
    if (questionType === 'specific' || questionType === 'yesNo') {
        prompt += `\nThe question is: ${question}\n`;
    }
    if (questionType === 'birthChart' && birthChartInfo) {
        prompt += `\nBirth Chart Information:\nDate: ${birthChartInfo.birthDate}\nTime: ${birthChartInfo.birthTime}\nPlace: ${birthChartInfo.birthPlace}\n`;
    }
    prompt += `\nGive a detailed interpretation for the above cards.`;
    const messages = [
        { role: 'system', content: 'You are a tarot card reader.' },
        { role: 'user', content: prompt },
    ];
    try {
        const response = yield openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
            max_tokens: 500,
        });
        const interpretation = (_e = (_d = (_c = (_b = (_a = response.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.trim()) !== null && _e !== void 0 ? _e : 'Failed to get the interpretation from OpenAI';
        res.json({ interpretation });
    }
    catch (error) {
        console.error('Failed to get the interpretation from OpenAI', error);
        res
            .status(500)
            .json({ error: 'Failed to get the interpretation from OpenAI' });
    }
});
exports.getReading = getReading;
