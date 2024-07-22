import Head from 'next/head';
import Link from 'next/link';
import styles from '../client/styles/ContentPage.module.css';

const WhatIsTarot: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Head>
          <title>What is Tarot? - AI Tarot</title>
          <meta
            name="description"
            content="Learn what tarot is and how it can help guide your life's journey."
          />
        </Head>
        <header className={styles.header}>
          <h1>What is Tarot?</h1>
          <p>Discover the history and significance of tarot cards.</p>
        </header>
        <img
          className={styles.contentImage}
          src="/what-is-tarot-reading.webp"
          alt="What Is Tarot Reading"
        />
        <section className={styles.content}>
          <p>
            Tarot is a form of cartomancy where practitioners use tarot cards to
            gain insights into the past, present, or future. The first known
            tarot decks originated in the mid-15th century in various parts of
            Europe. Originally, tarot cards were used for playing games, but
            they later became a popular tool for divination.
          </p>
          <h2>History of Tarot</h2>
          <p>
            The earliest known tarot decks were created in Italy and were used
            to play a game called Tarocchi. It wasn't until the 18th century
            that the tarot began to be used for divination. Antoine Court de
            Gébelin, a French clergyman, wrote a speculative history of the
            tarot that linked it to ancient Egyptian mysticism, and from there,
            its popularity as a tool for divination grew.
          </p>
          <h2>Structure of a Tarot Deck</h2>
          <p>
            A traditional tarot deck consists of 78 cards, divided into two main
            sections: the Major Arcana and the Minor Arcana. The Major Arcana
            consists of 22 cards that represent significant life events or
            spiritual lessons. The Minor Arcana consists of 56 cards that are
            divided into four suits: Cups, Pentacles, Swords, and Wands. Each
            suit contains 14 cards, including ten numbered cards and four court
            cards (Page, Knight, Queen, and King).
          </p>
          <h2>How Tarot Readings Work</h2>
          <p>
            During a tarot reading, the reader shuffles the deck and lays out
            the cards in a specific pattern known as a spread. The reader then
            interprets the cards based on their position in the spread, their
            symbolism, and the question or situation at hand. The interpretation
            can provide insights into various aspects of life, including
            relationships, career, and personal growth.
          </p>
        </section>
        <div className={styles.ctaButtons}>
          <Link href="/reading" className={styles.ctaButton}>
            Get a Reading Free
          </Link>
        </div>
        <section className={styles.relatedLinks}>
          <h2>Related Articles</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/how-to-read-tarot">How to Read Tarot</Link>
            </li>
            <li>
              <Link href="/general-tarot-reading">General Tarot Reading</Link>
            </li>
            <li>
              <Link href="/spesific-tarot-reading">
                Specific Question Tarot Reading
              </Link>
            </li>
            <li>
              <Link href="/yes-no-tarot-reading">Yes or No Tarot Reading</Link>
            </li>
            <li>
              <Link href="/birth-chart-tarot-reading">
                Birth Chart Tarot Reading
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WhatIsTarot;
