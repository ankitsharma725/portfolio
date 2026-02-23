import React from 'react';
import { Instagram, Twitter, Facebook, Github, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>Ankit Sharma Portfolio</h3>
          <p>
            Frontend Developer passionate about building responsive and interactive web applications using modern technologies. 
            Hands-on experience in HTML, CSS, JavaScript, React, and modern UI practices.
          </p>
          <p>
            Currently focusing on improving JavaScript skills and building real-world projects to strengthen problem-solving abilities.
          </p>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="social-link" 
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Ankit Sharma | Made with <Heart size={14} color="#ff6b6b" fill="#ff6b6b" /> in Jaipur</p>
      </div>
    </footer>
  );
};

export default Footer;