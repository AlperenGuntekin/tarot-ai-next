import Head from 'next/head';
import Link from 'next/link';
import styles from '../client/styles/HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Tarot - Discover Your Destiny</title>
        <meta
          name="description"
          content="Discover your destiny with AI-powered tarot readings. Get accurate and personalized insights tailored to your life and questions."
        />
        <link rel="icon" href="/tarot-ai-logo.png" />
      </Head>
      <header className={styles.hero}>
        <div>
          <h1 className={styles.title}>
            Free In-Person & Online Tarot Card Readings
          </h1>
          <p className={styles.subtitle}>
            Discover your destiny with our AI-powered tarot readings.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/reading" className={styles.ctaButton}>
              Get a Reading Free
            </Link>
          </div>
        </div>
        <div>
          <img src="/tarot-ai-mascot.png" alt="Tarot AI Mascot" />
        </div>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <img src="/personalized.webp" alt="Personalized Readings" />
          <h2>Personalized Readings</h2>
          <p>Get insights tailored to your life and questions.</p>
        </div>
        <div className={styles.feature}>
          <img src="/accurate.webp" alt="Accurate Predictions" />
          <h2>Accurate Predictions</h2>
          <p>Our advanced AI provides detailed and precise interpretations.</p>
        </div>
        <div className={styles.feature}>
          <img src="/easy-to-use.webp" alt="Easy to Use" />
          <h2>Easy to Use</h2>
          <p>Simple and intuitive interface for a seamless experience.</p>
        </div>
      </section>
      <section className={styles.additionalLinks}>
        <h2>Learn More About Tarot</h2>
        <div className={styles.cardContainer}>
          <Link href="/what-is-tarot" className={styles.card}>
            <img src="/what-is-tarot-reading.webp" alt="What is Tarot?" />
            <h3>What is Tarot?</h3>
          </Link>
          <Link href="/how-to-read-tarot" className={styles.card}>
            <img src="/how-to-read-tarot.webp" alt="How to Read Tarot" />
            <h3>How to Read Tarot</h3>
          </Link>
          <Link href="/general-tarot-reading" className={styles.card}>
            <img
              src="/general-tarot-reading.webp"
              alt="General Tarot Reading"
            />
            <h3>General Tarot Reading</h3>
          </Link>
          <Link href="/spesific-tarot-reading" className={styles.card}>
            <img
              src="/spesific-tarot-reading.webp"
              alt="Specific Question Tarot Reading"
            />
            <h3>Specific Question Tarot Reading</h3>
          </Link>
          <Link href="/yes-no-tarot-reading" className={styles.card}>
            <img
              src="/yes-no-tarot-reading.webp"
              alt="Yes or No Tarot Reading"
            />
            <h3>Yes or No Tarot Reading</h3>
          </Link>
          <Link href="/birth-chart-tarot-reading" className={styles.card}>
            <img
              src="/birth-chart-tarot-reading.webp"
              alt="Birth Chart Tarot Reading"
            />
            <h3>Birth Chart Tarot Reading</h3>
          </Link>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Schedule a Reading Today</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className={styles.ctaButton}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
