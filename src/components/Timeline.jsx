import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineEntries, typeColors } from '../data/resumeData';
import { TerminalHeader } from './TerminalHeader';
import styles from '../styles/Timeline.module.css';

function TimelineCard({ entry, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;
  const color = typeColors[entry.type];

  return (
    <div ref={ref} className={`${styles.cardWrapper} ${isLeft ? styles.left : styles.right}`}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.05 }}
        whileHover={{
          y: -6,
          rotateX: 2,
          boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
          transition: { duration: 0.2 },
        }}
        style={{ transformPerspective: 800 }}
      >
        {/* Type badge */}
        <span
          className={styles.badge}
          style={{ background: color.bg }}
        >
          {color.label}
        </span>

        <div className={styles.cardHeader}>
          <h2 className={styles.title}>
            {entry.link ? (
              <a href={entry.link} target="_blank" rel="noopener noreferrer">
                {entry.title} ↗
              </a>
            ) : (
              entry.title
            )}
          </h2>
          <span className={styles.org}>{entry.org}</span>
          <span className={styles.date}>{entry.date}</span>
        </div>

        <p className={styles.description}>{entry.description}</p>

        {entry.tech.length > 0 && (
          <div className={styles.techChips}>
            {entry.tech.map(t => (
              <span key={t} className={styles.chip}>
                [{t}]
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Timeline dot */}
      <div className={styles.dot} style={{ background: color.bg }} />
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experiences" className={styles.section}>
      <TerminalHeader text="experiences" />

      <div className={styles.timeline}>
        <div className={styles.line} />
        {timelineEntries.map((entry, i) => (
          <TimelineCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
