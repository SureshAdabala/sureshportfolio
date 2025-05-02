import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Lightbulb, 
  Leaf, 
  Calendar,
  Users
} from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  role: string;
  period: string;
  description: string;
  tech: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  icon, 
  title, 
  role, 
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
      <p className="text-primary-400 text-sm mb-3">{role}</p>
      
      <p className="text-dark-300 mb-4 line-clamp-3">{description}</p>
      
      <div className="bg-dark-900/50 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-2">Technologies Used:</h4>
        <p className="text-dark-300 text-sm">{tech}</p>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Automatic Room Light/Fan Controller with Visitor Counter",
      role: "Team Lead",
      period: "Jan 2025 – Mar 2025",
      description: "Smart automation project using sensors and microcontroller for room occupancy tracking and energy-efficient control of lights/fans.",
      tech: "IR sensors, Microcontroller, Relay, LCD, Embedded C"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Agricultural Modifications",
      role: "Team Lead",
      period: "Sep 2023 – Nov 2023",
      description: "Community service initiative promoting sustainable agriculture and educating local farmers on modern organic techniques.",
      tech: "Workshops, community outreach, farming technology"
    }
  ];

  return (
    <AnimatedSection id="projects" className="bg-background-dark">
      <h2 className="section-title fade-in">Projects</h2>
      <p className="section-subtitle fade-in">
        Practical applications of my skills and knowledge to solve real-world problems
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            icon={project.icon}
            title={project.title}
            role={project.role}
            period={project.period}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>

      <div className="mt-16 text-center fade-in">
        <p className="text-dark-300 mb-6">
          I'm constantly working on new projects to improve my skills and explore new technologies.
        </p>
        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          Discuss a Project Idea
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Projects;