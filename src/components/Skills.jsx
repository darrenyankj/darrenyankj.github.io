import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiGit, SiDocker, SiMongodb,
  SiPandas, SiNumpy, SiTensorflow, SiScikitlearn,
  SiKubernetes, SiKeras, SiApachespark, SiQlik,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { skillGroups } from '../data/resumeData';
import { TerminalHeader } from './TerminalHeader';
import styles from '../styles/Skills.module.css';

// Custom SVG icons for logos not in react-icons
const TableauIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" width="1em" height="1em">
    {/* Large center cross */}
    <rect x="44" y="5" width="12" height="90" rx="3" />
    <rect x="5" y="44" width="90" height="12" rx="3" />
    {/* NW small cross */}
    <rect x="18" y="10" width="8" height="28" rx="2" />
    <rect x="9" y="19" width="28" height="8" rx="2" />
    {/* NE small cross */}
    <rect x="74" y="10" width="8" height="28" rx="2" />
    <rect x="63" y="19" width="28" height="8" rx="2" />
    {/* SW small cross */}
    <rect x="18" y="62" width="8" height="28" rx="2" />
    <rect x="9" y="73" width="28" height="8" rx="2" />
    {/* SE small cross */}
    <rect x="74" y="62" width="8" height="28" rx="2" />
    <rect x="63" y="73" width="28" height="8" rx="2" />
  </svg>
);

const MatplotlibIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    {/* Axes */}
    <path d="M14 14 L14 86 L86 86" strokeWidth="7" />
    {/* Sine-like curve */}
    <path d="M20 66 C32 28 44 28 52 54 C60 80 72 80 84 44" strokeWidth="6" />
  </svg>
);

const ICON_MAP = {
  python: SiPython,
  java: FaJava,
  r: () => <img src="/images/icon-r.png" alt="R" className={styles.imgIcon} />,
  sql: FaDatabase,
  stata: () => <span className={styles.textIcon}>STA</span>,
  js: SiJavascript,
  ts: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  sas: () => <span className={styles.textIcon}>SAS</span>,
  react: SiReact,
  git: SiGit,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  snowflake: BsSnow,
  mongodb: SiMongodb,
  powerbi: () => <img src="/images/icon-powerbi.png" alt="Power BI" className={styles.imgIcon} />,
  tableau: TableauIcon,
  qlik: SiQlik,
  excel: () => <img src="/images/icon-excel.png" alt="Excel" className={styles.imgIcon} />,
  pandas: SiPandas,
  numpy: SiNumpy,
  tensorflow: SiTensorflow,
  keras: SiKeras,
  sklearn: SiScikitlearn,
  pyspark: SiApachespark,
  matplotlib: MatplotlibIcon,
};

function SkillBadge({ skill, delay }) {
  const IconComponent = ICON_MAP[skill.icon];

  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -4, scale: 1.08, transition: { duration: 0.15 } }}
      title={skill.name}
    >
      <div className={styles.iconWrap}>
        {IconComponent && <IconComponent />}
      </div>
      <span className={styles.skillLabel}>{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <TerminalHeader text="skills" />

      <div className={styles.groups}>
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className={styles.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
          >
            <h2 className={styles.groupLabel}>
              <span className={styles.comment}>{'// '}</span>
              {group.label}
            </h2>
            <div className={styles.grid}>
              {group.skills.map((skill, si) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  delay={gi * 0.05 + si * 0.03}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
