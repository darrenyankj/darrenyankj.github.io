import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiGit, SiDocker, SiMongodb,
  SiPandas, SiNumpy, SiTensorflow, SiScikitlearn,
  SiKubernetes, SiKeras, SiApachespark, SiQlik,
  SiApachehadoop,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaRProject } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';

const TableauIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" width="1em" height="1em">
    <rect x="44" y="5" width="12" height="90" rx="3" />
    <rect x="5" y="44" width="90" height="12" rx="3" />
    <rect x="18" y="10" width="8" height="28" rx="2" />
    <rect x="9" y="19" width="28" height="8" rx="2" />
    <rect x="74" y="10" width="8" height="28" rx="2" />
    <rect x="63" y="19" width="28" height="8" rx="2" />
    <rect x="18" y="62" width="8" height="28" rx="2" />
    <rect x="9" y="73" width="28" height="8" rx="2" />
    <rect x="74" y="62" width="8" height="28" rx="2" />
    <rect x="63" y="73" width="28" height="8" rx="2" />
  </svg>
);

const MatplotlibIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M14 14 L14 86 L86 86" strokeWidth="7" />
    <path d="M20 66 C32 28 44 28 52 54 C60 80 72 80 84 44" strokeWidth="6" />
  </svg>
);

// Keyed by the tech name string used in resumeData
export const TECH_ICON_MAP = {
  Python: SiPython,
  Java: FaJava,
  R: FaRProject,
  SQL: FaDatabase,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Git: SiGit,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Snowflake: BsSnow,
  MongoDB: SiMongodb,
  Tableau: TableauIcon,
  Qlik: SiQlik,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  'Scikit-Learn': SiScikitlearn,
  PySpark: SiApachespark,
  Matplotlib: MatplotlibIcon,
  Hadoop: SiApachehadoop,
};
