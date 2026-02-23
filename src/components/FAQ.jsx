import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who am I?',
    answer: 'My name is Ankit Sharma, a passionate Frontend Developer based in Jaipur, Rajasthan, India. I specialize in crafting clean, modern, and user-friendly web interfaces with a strong attention to detail.'
  },
  {
    question: 'What is my Tech Stack?',
    answer: 'I am proficient in HTML, CSS, JavaScript, React, Next.js, and Bootstrap. I focus on writing clean, maintainable code and building responsive, visually appealing user experiences.'
  },
  {
    question: 'Why should you hire me?',
    answer: 'I combine a strong eye for design with solid technical skills, ensuring pixel-perfect implementation and smooth user interactions. I am committed to delivering high-quality work and bringing a problem-solving mindset to every project.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="section-header">
        <span className="section-label">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>

      <div className="accordion">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div 
              className="accordion-header"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {faq.question}
              <ChevronDown className="accordion-icon" />
            </div>
            <div className="accordion-content">
              {faq.answer}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;