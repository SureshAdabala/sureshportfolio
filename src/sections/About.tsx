import React from 'react';
import { GraduationCap, Heart, Languages, Map } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-dark-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">
          An ambitious Electronics and Communication Engineering graduate with a passion for Full Stack Java Development, web development, 
          and building scalable frontend and backend applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="fade-in">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Who I Am</h3>
            <p className="text-dark-300 mb-6 leading-relaxed">
              As a recent graduate in Electronics and Communication Engineering, I combine technical knowledge with a passion for solving real-world problems. 
              I'm dedicated to continuous learning and eager to apply my skills in embedded systems, IoT, and web development.
            </p>
            <p className="text-dark-300 mb-6 leading-relaxed">
              My journey in technology has been driven by curiosity and the desire to create solutions that make a difference. 
              I believe in the power of technology to transform lives and am committed to contributing to this field.
            </p>
            <p className="text-dark-300 mb-6 leading-relaxed">
              With a strong foundation in both hardware and software, I am excited about the potential of bridging the gap between the two in the world of smart devices and automation. 
              I am enthusiastic about collaborating with diverse teams to bring innovative ideas to life and push the boundaries of what's possible.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4 fade-in">Education</h3>
            <div className="space-y-6 stagger-children">
              <div className="timeline-item">
                <h4 className="text-lg font-medium text-white">
                  B.Tech – Electronics & Communication
                </h4>
                <p className="text-primary-400 text-sm mt-1">Eswar College of Engineering (2021–2025)</p>
                <p className="mt-2 text-dark-300">CGPA: 7.67</p>
              </div>

              <div className="timeline-item">
                <h4 className="text-lg font-medium text-white">
                  Intermediate (MPC)
                </h4>
                <p className="text-primary-400 text-sm mt-1">Vikas Junior College (2019–2021)</p>
                <p className="mt-2 text-dark-300">CGPA: 8.99</p>
              </div>

              <div className="timeline-item">
                <h4 className="text-lg font-medium text-white">
                  SSC
                </h4>
                <p className="text-primary-400 text-sm mt-1">ZP High School (2018–2019)</p>
                <p className="mt-2 text-dark-300">CGPA: 9.0</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 fade-in">
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary-500" />
                <h4 className="text-lg font-medium text-white">Languages</h4>
              </div>
              <div className="flex gap-3">
                <span className="skill-badge">Telugu (Fluent)</span>
                <span className="skill-badge">English (Intermediate)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;