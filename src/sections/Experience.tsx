import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Brain, 
  Code, 
  Shield, 
  Cpu,
  BookText
} from 'lucide-react';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  icon, 
  title, 
  company, 
  period, 
  description, 
  tech 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card fade-in group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-primary-500 p-3 bg-primary-900/30 rounded-lg">
          {icon}
        </div>
        <div className="text-dark-400 text-sm">{period}</div>
      </div>
      
      <h3 className="text-xl font-display font-medium text-white mb-1 group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-primary-400 text-sm mb-3">{company}</p>
      
      <p className="text-dark-300 mb-4">{description}</p>
      
      <div className="bg-dark-900/50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-2">Technologies/Topics:</h4>
        <p className="text-dark-300 text-sm">{tech}</p>
      </div>
    </motion.div>
  );
};

const WorkshopCard: React.FC<{title: string, organizer: string, duration: string}> = ({
  title,
  organizer,
  duration
}) => {
  return (
    <div className="bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-lg p-5 fade-in">
      <div className="flex items-start gap-4">
        <div className="text-primary-500 p-2 bg-primary-900/30 rounded-lg">
          <BookText className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-primary-400 text-sm">{organizer}</p>
          <p className="text-dark-400 mt-1 text-sm">{duration}</p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Sentiment Analysis Using Machine Learning",
      company: "Edunet Foundation",
      period: "Jun 2023 – Oct 2023",
      description: "Built sentiment analysis tool using ML algorithms and data preprocessing.",
      tech: "Python, Machine Learning, NLP"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development – CRUD Operations",
      company: "Skill Dunia",
      period: "Aug 2023 – Sep 2023",
      description: "Developed CRUD-based web app with frontend and backend integration.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Facial Recognition Door Locking System",
      company: "Sak Informatics",
      period: "Jun 2024 – Jul 2024",
      description: "Implemented a door automation system with facial recognition on Raspberry Pi.",
      tech: "Python, OpenCV, Raspberry Pi"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "VLSI Design for Testability",
      company: "BIST Pvt. Ltd.",
      period: "Jan 2025 – Apr 2025",
      description: "Studied scan chains, DFT, and testing practices in VLSI design.",
      tech: "Semiconductor Testing, VLSI Debugging"
    }
  ];

  const workshops = [
    {
      title: "PCB Design Fundamentals",
      organizer: "APSSDC",
      duration: "7 Days"
    },
    {
      title: "Embedded Systems",
      organizer: "IIES",
      duration: "6 Days"
    }
  ];

  return (
    <AnimatedSection id="experience" className="bg-dark-950">
      <h2 className="section-title fade-in">Experience & Education</h2>
      <p className="section-subtitle fade-in">
        Professional experiences and internships that have shaped my skills and knowledge
      </p>

      <div className="mt-12">
        <h3 className="text-2xl font-display font-bold text-white mb-6 fade-in">
          Internships
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              icon={exp.icon}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              tech={exp.tech}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;