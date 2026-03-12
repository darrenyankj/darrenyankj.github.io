import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/DodgeballTracker.module.css';

function getThrowProps() {
  const fromLeft = Math.random() > 0.5;
  const startX = fromLeft ? -80 : window.innerWidth + 80;
  const endX = fromLeft ? window.innerWidth + 80 : -80;
  const startY = 100 + Math.random() * (window.innerHeight - 200);
  // Arc: peaks midway, ±80px vertical
  const peakY = startY - 60 - Math.random() * 80;
  const endY = startY + (Math.random() - 0.5) * 120;
  const spin = (fromLeft ? 1 : -1) * (720 + Math.random() * 360);
  return { startX, endX, startY, peakY, endY, spin };
}

export default function DodgeballTracker() {
  const [ball, setBall] = useState(null);

  useEffect(() => {
    // First throw after 8–16s, then every 18–35s
    const schedule = () => {
      const delay = 8000 + Math.random() * 8000;
      return setTimeout(() => {
        setBall({ id: Date.now(), ...getThrowProps() });
      }, delay);
    };

    let timer = schedule();
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setBall(null);
    // Schedule next throw 18–35s later
    setTimeout(() => {
      setBall({ id: Date.now(), ...getThrowProps() });
    }, 18000 + Math.random() * 17000);
  };

  return (
    <div className={styles.trackerContainer} aria-hidden="true">
      <AnimatePresence>
        {ball && (
          <motion.div
            key={ball.id}
            className={styles.ball}
            initial={{ x: ball.startX, y: ball.startY, rotate: 0, opacity: 1 }}
            animate={{
              x: [ball.startX, (ball.startX + ball.endX) / 2, ball.endX],
              y: [ball.startY, ball.peakY, ball.endY],
              rotate: ball.spin,
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 1.8, ease: 'easeInOut', times: [0, 0.5, 1] }}
            onAnimationComplete={handleComplete}
          >
            <svg width="48" height="48" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#c0392b" />
              <circle cx="50" cy="50" r="48" fill="url(#bg)" />
              <path d="M 18 28 Q 50 8 82 28" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
              <path d="M 14 54 Q 50 74 86 54" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
              <path d="M 28 14 Q 8 50 28 86" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
              <ellipse cx="34" cy="28" rx="10" ry="6" fill="white" opacity="0.18" />
              <defs>
                <radialGradient id="bg" cx="35%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6b0000" stopOpacity="0.5" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
