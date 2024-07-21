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
        <script
          data-ad-client="YOUR_ADSENSE_CLIENT_ID"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-9JZHYYJ7JH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9JZHYYJ7JH', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
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
