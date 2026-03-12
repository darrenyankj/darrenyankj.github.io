import { useState, useEffect } from 'react';
import {
  IoHomeOutline,
  IoTerminalOutline,
  IoBriefcaseOutline,
  IoCallOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoCaretForwardOutline,
} from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Navbar.module.css';

const navItems = [
  { id: 'introduction', label: 'Home', Icon: IoHomeOutline },
  { id: 'skills', label: 'Skills', Icon: IoTerminalOutline },
  { id: 'experiences', label: 'Experiences', Icon: IoBriefcaseOutline },
  { id: 'contacts', label: 'Contacts', Icon: IoCallOutline },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY + 97;
      let current = 'introduction';
      for (const section of sections) {
        if (scrollY >= section.offsetTop) current = section.id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navHeader}>
          <IoCaretForwardOutline className={styles.arrow} />
          <span className={styles.headerName}>darrenyankj</span>
        </li>

        {navItems.map(({ id, label, Icon }) => (
          <li key={id} className={styles.navItem}>
            <a
              href={`#${id}`}
              className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              onClick={e => scrollTo(e, id)}
            >
              <Icon className={styles.navIcon} />
              <span className={styles.linkText}>{label}</span>
            </a>
          </li>
        ))}

        <li className={styles.navItem}>
          <button
            className={`${styles.navLink} ${styles.themeToggle}`}
            onClick={toggleTheme}
          >
            {isDark ? (
              <IoSunnyOutline className={styles.navIcon} />
            ) : (
              <IoMoonOutline className={styles.navIcon} />
            )}
            <span className={styles.linkText}>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
