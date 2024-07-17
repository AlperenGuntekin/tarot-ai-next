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
    const { questionType, selectedCards, question } = req.body;
    let prompt = `You are a tarot card reader. Interpret the following cards for a ${questionType} reading:\n`;
    selectedCards.forEach((card, index) => {
        prompt += `${index + 1}. ${card.name} (${card.isReversed ? 'Reversed' : 'Upright'}): ${card.description}\n`;
    });
    if (questionType === 'specific' || questionType === 'yesNo') {
        prompt += `\nThe question is: ${question}\n`;
    }
    prompt += `\nGive a detailed interpretation for the above cards.`;
    try {
        const response = yield openai.completions.create({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 500,
        });
        const interpretation = response.choices[0].text.trim();
        res.json({ interpretation });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ error: 'Failed to get the interpretation from OpenAI' });
    }
});
exports.getReading = getReading;
