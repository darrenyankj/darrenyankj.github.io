import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contacts from './components/Contacts';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Introduction />
        <Skills />
        <Timeline />
        <Contacts />
      </main>
    </ThemeProvider>
  );
}
