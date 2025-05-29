import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="w-full">
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Footer />
      </div>
    </main>
  );
};

export default App;
