import styles from '../styles/TerminalHeader.module.css';

export function TerminalHeader({ text }) {
  return (
    <h1 className={styles.header}>
      <span className={styles.prompt}>{'>'}</span>
      <span className={styles.command}>{text}</span>
      <span className={styles.cursor}>_</span>
    </h1>
  );
}
