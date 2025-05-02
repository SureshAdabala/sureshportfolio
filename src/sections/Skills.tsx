import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Cpu, 
  Code, 
  Database, 
  Zap, 
  Layers, 
  FileText, 
  Users, 
  MessageSquare,
  Brain,
  HeartHandshake,
  Flame,
  Timer
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card fade-in"
    >
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-display font-medium text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge text-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const TechnicalSkills = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Hardware & Embedded",
    skills: ["PCB Designing", "Embedded C", "Raspberry Pi", "IoT Basics"],
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript Basics"],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data & Analysis",
    skills: ["SQL Basics", "Python (ML Fundamentals)"],
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Productivity",
    skills: ["MS Office", "Documentation"],
  },
];

const SoftSkills = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    skills: ["Teamwork", "Communication"],
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Cognitive",
    skills: ["Critical Thinking", "Emotional Intelligence"],
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Interpersonal",
    skills: ["Anger Management", "Conflict Resolution"],
  },
  {
    icon: <Flame className="h-8 w-8" />,
    title: "Work Ethic",
    skills: ["Dedication", "Time Management"],
  },
];

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="bg-gradient-to-b from-dark-950 to-background-dark">
      <h2 className="section-title fade-in">Skills</h2>
      <p className="section-subtitle fade-in">
        A combination of technical expertise and soft skills that enable me to deliver comprehensive solutions
      </p>

      <div className="mt-12">
        <h3 className="text-2xl font-display font-bold text-white mb-6 fade-in">
          <Zap className="h-5 w-5 inline-block mr-2 text-primary-500" />
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TechnicalSkills.map((skill, index) => (
            <SkillCard 
              key={index} 
              icon={skill.icon} 
              title={skill.title} 
              skills={skill.skills} 
            />
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-6 fade-in">
          <MessageSquare className="h-5 w-5 inline-block mr-2 text-primary-500" />
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SoftSkills.map((skill, index) => (
            <SkillCard 
              key={index} 
              icon={skill.icon} 
              title={skill.title} 
              skills={skill.skills} 
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;