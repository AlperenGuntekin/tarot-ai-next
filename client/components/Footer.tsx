import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 AI Tarot. All rights reserved.</p>
      {/* <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink}>
          Facebook
        </a>
        <a href="#" className={styles.socialLink}>
          Twitter
        </a>
        <a href="#" className={styles.socialLink}>
          Instagram
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
