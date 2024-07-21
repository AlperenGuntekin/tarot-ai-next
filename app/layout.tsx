import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../client/styles/custom.css';
import Header from '@/client/components/Header';
import Footer from '@/client/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tarot - Discover Your Destiny',
  description:
    'Discover your destiny with AI-powered tarot readings. Get accurate and personalized insights tailored to your life and questions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover your destiny with AI-powered tarot readings. Get accurate and personalized insights tailored to your life and questions."
        />
        <meta
          name="keywords"
          content="AI, Tarot, Readings, Destiny, Predictions"
        />
        <link rel="icon" href="/tarot-ai-logo.png" />
        <title>AI Tarot - Discover Your Destiny</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
