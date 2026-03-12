import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoPaperPlaneOutline,
  IoClipboardOutline,
  IoLinkOutline,
  IoCheckmarkOutline,
} from 'react-icons/io5';
import { TerminalHeader } from './TerminalHeader';
import styles from '../styles/Contacts.module.css';

const contacts = [
  {
    id: 'github',
    Icon: IoLogoGithub,
    label: 'github.com/darrenyankj',
    href: 'https://github.com/darrenyankj',
  },
  {
    id: 'linkedin',
    Icon: IoLogoLinkedin,
    label: 'linkedin.com/in/darren-yan-kj',
    href: 'https://linkedin.com/in/darren-yan-kj',
  },
  {
    id: 'email',
    Icon: IoMailOutline,
    label: 'darrenyankj@gmail.com',
    href: 'mailto:darrenyankj@gmail.com',
  },
  {
    id: 'telegram',
    Icon: IoPaperPlaneOutline,
    label: '@darrenyankayjay',
    href: 'https://t.me/darrenyankayjay',
  },
];

function ContactRow({ contact, index }) {
  const [copied, setCopied] = useState(false);
  const { Icon, label, href } = contact;

  const handleCopy = () => {
    navigator.clipboard.writeText(label);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      className={styles.row}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.info}>
        <Icon className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </div>

      <div className={styles.actions}>
        <motion.button
          className={styles.actionBtn}
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={copied ? 'Copied!' : 'Copy'}
        >
          {copied ? <IoCheckmarkOutline /> : <IoClipboardOutline />}
        </motion.button>

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Open link"
        >
          <IoLinkOutline />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Contacts() {
  return (
    <section id="contacts" className={styles.section}>
      <TerminalHeader text="contacts" />

      <div className={styles.list}>
        {contacts.map((c, i) => (
          <ContactRow key={c.id} contact={c} index={i} />
        ))}
      </div>
    </section>
  );
}
