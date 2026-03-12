import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Introduction.module.css';

const FULL_TEXT = "Hi there! I'm Darren, a Software Engineer at Goldman Sachs.";

export default function Introduction() {
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 18);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const highlightText = (text) => {
    return text
      .replace('Darren', '<strong>Darren</strong>')
      .replace('Software Engineer', '<strong>Software Engineer</strong>')
      .replace('Goldman Sachs', '<strong>Goldman Sachs</strong>');
  };

  return (
    <section id="introduction" className={styles.section}>
      {/* Chicago background */}
      <div className={styles.bgOverlay} />

      <div className={styles.content}>
        {/* Profile photo */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <img
            src="/images/intro-pic.jpg"
            alt="Darren Yan"
            className={styles.profileImage}
          />
          <div className={styles.imageGlow} />
        </motion.div>

        {/* Text */}
        <div className={styles.textBlock}>
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            darren yan
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: highlightText(displayed) }}
            />
            <span className={styles.cursor}>|</span>
          </motion.p>

          <motion.a
            href="/files/Darren_Yan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <span>View Resume</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
