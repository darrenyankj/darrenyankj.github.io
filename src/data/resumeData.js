export const timelineEntries = [
  {
    id: 1,
    title: 'Software Engineer Analyst',
    org: 'Goldman Sachs',
    date: 'Jul 2025 – Present',
    type: 'work',
    description:
      'Developed a full-stack dashboard for Synthetic Products Group to monitor risk and metrics. Built an AI agent that answers natural language queries using tools to retrieve and transform data.',
    tech: ['Python', 'React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'B.Sc. Data Science & Economics (Hons)',
    org: 'National University of Singapore',
    date: 'Aug 2021 – Jun 2025',
    type: 'education',
    description:
      'GPA 4.9/5.0 — Highest Distinction. Best Academic Exercise in the Discipline (Lijen Industrial Development Medal). NUS Merit Scholarship. Dean\'s List in 3 semesters.',
    tech: [],
  },
  {
    id: 3,
    title: 'University of Chicago Econometrics Competition',
    org: 'Finalist — Top 15 Teams Worldwide',
    date: 'Apr 2025',
    type: 'achievement',
    description:
      'Represented the National University of Singapore and placed among the top 15 teams worldwide. Analysed large datasets using econometrics and causal inference methods.',
    tech: ['Python', 'R', 'Stata'],
  },
  {
    id: 4,
    title: 'Data Analytics Intern',
    org: 'United Overseas Bank',
    date: 'May – Aug 2024',
    type: 'work',
    description:
      'Created predictive analytics models in Python to classify customer credit risk with over 90% precision. Identified anomalous client behaviour via SAS/SQL models. Designed exception dashboard for Group Audit in Qlik.',
    tech: ['Python', 'SAS', 'SQL', 'Qlik'],
  },
  {
    id: 6,
    title: 'Dodgeball Captain & RC4 Director',
    org: 'National University of Singapore',
    date: 'Aug 2021 – May 2025',
    type: 'extracurricular',
    description:
      'Captain of FASS dodgeball team — Inter-Faculty Games Champions 2022 & 2023. Director of RC4 Clubs & Societies, overseeing 30+ interest groups. Project Director, NUS Inter-College Games 2023 (1000+ participants).',
    tech: [],
  },
  {
    id: 7,
    title: 'Data Science Intern',
    org: 'Ensign InfoSecurity',
    date: 'May – Jul 2022',
    type: 'work',
    description:
      'Built neural networks to detect phishing emails with over 95% accuracy. Deployed cross-site scripting detection model using PySpark and Hadoop.',
    tech: ['Python', 'TensorFlow', 'Keras', 'PySpark', 'Hadoop'],
  },
  {
    id: 8,
    title: 'Project Management Intern',
    org: 'PricewaterhouseCoopers',
    date: 'Apr – Jul 2021',
    type: 'work',
    description:
      'Assisted full-stack development of the Accounting Consulting Service ticketing portal. Liaised with internal and external stakeholders to facilitate effective system design decisions.',
    tech: [],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'R', icon: 'r' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Stata', icon: 'stata' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'SAS', icon: 'sas' },
    ],
  },
  {
    label: 'Frameworks & Tools',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Snowflake', icon: 'snowflake' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Tableau', icon: 'tableau' },
      { name: 'Qlik', icon: 'qlik' },
      { name: 'Excel', icon: 'excel' },
    ],
  },
  {
    label: 'Libraries',
    skills: [
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Keras', icon: 'keras' },
      { name: 'Scikit-Learn', icon: 'sklearn' },
      { name: 'PySpark', icon: 'pyspark' },
      { name: 'Matplotlib', icon: 'matplotlib' },
    ],
  },
];

export const typeColors = {
  work: { bg: '#3F72AF', label: 'Work' },
  achievement: { bg: '#e8a020', label: 'Achievement' },
  education: { bg: '#2ecc71', label: 'Education' },
  project: { bg: '#9b59b6', label: 'Project' },
  extracurricular: { bg: '#e74c3c', label: 'Extracurricular' },
};
