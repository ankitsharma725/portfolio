import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Braces } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={50} />,
    title: 'HTML Developer',
    year: '2025',
    desc: 'Built responsive and semantic web pages using HTML5. Mastered Flexbox and Grid for clean layouts. Implemented accessible content for better UX.'
  },
  {
    icon: <Palette size={50} />,
    title: 'CSS Developer',
    year: '2025',
    desc: 'Created visually stunning designs with CSS3. Expert in animations, transitions, and modern layout techniques. Responsive design specialist.'
  },
  {
    icon: <Braces size={50} />,
    title: 'JS Developer',
    year: '2025',
    desc: 'Proficient in DOM manipulation, event handling, and ES6+. Built interactive elements like sliders, modals, and dynamic content.'
  }
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-label">What I Have Done So Far</span>
        <h2 className="section-title">Work Experience</h2>
      </div>
      
      <div className="timeline">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">{skill.icon}</div>
            <h3 className="timeline-title">{skill.title} ({skill.year})</h3>
            <p className="timeline-desc">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;