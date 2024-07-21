import Head from 'next/head';
import Link from 'next/link';
import styles from '../client/styles/HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Tarot - Discover Your Destiny</title>
        <meta
          name="description"
          content="Discover your destiny with AI-powered tarot readings. Get accurate and personalized insights tailored to your life and questions for free."
        />
        <meta
          name="keywords"
          content="tarot, AI tarot, tarot readings, online tarot, tarot cards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      </Head>
      <div className={styles.container}>
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
                Get a Reading
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
            <p>
              Our advanced AI provides detailed and precise interpretations.
            </p>
          </div>
          <div className={styles.feature}>
            <img src="/easy-to-use.webp" alt="Easy to Use" />
            <h2>Easy to Use</h2>
            <p>Simple and intuitive interface for a seamless experience.</p>
          </div>
        </section>
        <section className={styles.testimonials}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonial}>
            <p>
              "AI Tarot gave me clarity on my career path. Highly recommended!"
            </p>
            <p>- Alex J.</p>
          </div>
          <div className={styles.testimonial}>
            <p>"The readings are so accurate, it’s like magic!"</p>
            <p>- Sara L.</p>
          </div>
        </section>
        <section className={styles.about}>
          <h2>About AI Tarot</h2>
          <p>
            AI Tarot combines the ancient art of tarot reading with the
            precision of modern AI technology. Our goal is to provide you with
            accurate and insightful readings that can help guide your life's
            journey.
          </p>
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
    </>
  );
};

export default HomePage;
