import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import { resume } from 'react-dom/server';

const Hero = () => {
  return (
    <section className="hero" id="first">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-greeting">👋 Welcome to my portfolio</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ankit Sharma</span>
        </h1>
        <div className="hero-subtitle">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'React Developer',
              2000,
              'BCA Student',
              2000,
              'Freelancer',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <Send size={18} /> Hire Me
          </a>
       {/* <a href="/ankit-resume.pdf" className="btn btn-secondary" download>
  <Download size={18} /> Download CV
</a> */}

        </div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-container">
          <img 
            src='/img/ankit.jpg' 
            alt="Ankit Sharma" 
            className="profile-img"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;