import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">AI Tarot</Link>
        <img src="/tarot-ai-logo.png" alt="AI Tarot Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/reading">Get a Reading</Link>
      </nav>
    </header>
  );
};

export default Header;
