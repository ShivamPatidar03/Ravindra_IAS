import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from './sections/Hero';
import Journey from './sections/Journey';
import About from './sections/About';
import BranchFeatures from './sections/BranchFeatures';
import Courses from './sections/Courses';
import Resources from './sections/Resources';
import Toppers from './sections/Toppers';
import Features from './sections/Features';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import FinalCTA from './sections/FinalCTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  // Give some time for the beautiful page loader to play and spline to mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Cinematic intro loader */}
      {loading && <PageLoader />}
      
      {/* Smooth scrolling wrapper */}
      <ReactLenis root>
        <div className="relative w-full min-h-screen z-10 font-sans">
          <Navbar />
          <Hero />
          <Journey />
          <About />
          <BranchFeatures />
          <Courses />
          <Stats />
          <Toppers />
          <Resources />
          <Testimonials />
          <FAQ />
          <Contact />
          <FinalCTA />
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
