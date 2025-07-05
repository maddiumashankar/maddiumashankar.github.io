import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests';
import CTFSection from './components/CTFSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the component

function App() {
  return (
    <div className="bg-neutral-darkest text-neutral-light font-sans antialiased"> {/* Added antialiased for smoother fonts */}
      <Header />
      <main>
        <Home />
        <About />
        <Interests />
        <CTFSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add the button here */}
    </div>
  );
}

export default App;
