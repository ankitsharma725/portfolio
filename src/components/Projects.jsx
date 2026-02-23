import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Myntra Clone',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    desc: 'Full-featured e-commerce website clone with product listings, cart functionality, and modern UI. Implemented from Figma design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    live: '#',
    github: '#'
  },
  {
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    desc: 'Personal portfolio showcasing skills and projects. Features smooth animations, responsive design, and modern UI/UX.',
    tech: ['React', 'CSS3', 'Framer Motion'],
    live: '#',
    github: '#'
  },
  {
    title: 'Recipe App',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop',
    desc: 'Interactive recipe application with search functionality, category filtering, and beautiful card layouts.',
    tech: ['JavaScript', 'API', 'Bootstrap'],
    live: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-label">My Recent Work</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} className="project-link">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="project-link">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;