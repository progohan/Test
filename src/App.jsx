import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Expertise from './components/Expertise.jsx';
import Experience from './components/Experience.jsx';
import Leadership from './components/Leadership.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Expertise />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
