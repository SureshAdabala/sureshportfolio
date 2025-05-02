import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  id, 
  className = '', 
  children 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (inView && sectionRef.current) {
      const fadeElements = sectionRef.current.querySelectorAll('.fade-in');
      const staggerElements = sectionRef.current.querySelectorAll('.stagger-children');
      
      fadeElements.forEach((element) => {
        element.classList.add('is-visible');
      });
      
      staggerElements.forEach((element) => {
        element.classList.add('is-visible');
      });
    }
  }, [inView]);

  return (
    <motion.section
      id={id}
      ref={(node) => {
        // @ts-ignore - Combining refs
        ref(node);
        // @ts-ignore - Combining refs
        sectionRef.current = node;
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className={`section-container ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;