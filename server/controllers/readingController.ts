import { Request, Response } from 'express';
import OpenAI from 'openai';
import { Card } from '../../types/tarot';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const getReading = async (req: Request, res: Response) => {
  const { questionType, selectedCards, question, birthChartInfo } =
    req.body as {
      questionType: string;
      selectedCards: Card[];
      question: string;
      birthChartInfo: {
        birthDate: string;
        birthTime: string;
        birthPlace: string;
      } | null;
    };

  let prompt = `You are a tarot card reader. Interpret the following cards for a ${questionType} reading:\n`;
  selectedCards.forEach((card, index) => {
    prompt += `${index + 1}. ${card.name} (${
      card.isReversed ? 'Reversed' : 'Upright'
    }): ${card.description}\n`;
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
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      max_tokens: 500,
    });

    const interpretation =
      response.choices?.[0]?.message?.content?.trim() ??
      'Failed to get the interpretation from OpenAI';
    res.json({ interpretation });
  } catch (error) {
    console.error('Failed to get the interpretation from OpenAI', error);
    res
      .status(500)
      .json({ error: 'Failed to get the interpretation from OpenAI' });
  }
};
