import { Request, Response } from 'express';
import OpenAI from 'openai';
import { Card } from '../../types/tarot';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const getReading = async (req: Request, res: Response) => {
  const { questionType, selectedCards, question } = req.body as {
    questionType: string;
    selectedCards: Card[];
    question: string;
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

  prompt += `\nGive a detailed interpretation for the above cards.`;

  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 500,
    });

    const interpretation = response.choices[0].text.trim();
    res.json({ interpretation });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Failed to get the interpretation from OpenAI' });
  }
};
