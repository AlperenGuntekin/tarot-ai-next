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

  let messages: { role: string; content: string }[] = [
    {
      role: 'system',
      content: `You are a tarot card reader. Interpret the following cards for a ${questionType} reading.`,
    },
  ];

  selectedCards.forEach((card, index) => {
    messages.push({
      role: 'user',
      content: `${index + 1}. ${card.name} (${
        card.isReversed ? 'Reversed' : 'Upright'
      }): ${card.description}`,
    });
  });

  if (questionType === 'specific' || questionType === 'yesNo') {
    messages.push({
      role: 'user',
      content: `The question is: ${question}`,
    });
  }

  messages.push({
    role: 'user',
    content: 'Give a detailed interpretation for the above cards.',
  });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any, // Cast to any to satisfy TypeScript
      max_tokens: 500,
    });

    const interpretation =
      response.choices?.[0]?.message?.content?.trim() ??
      'No interpretation available';

    res.json({ interpretation });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Failed to get the interpretation from OpenAI' });
  }
};
