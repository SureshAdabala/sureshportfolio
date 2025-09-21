import React from 'react';
import { Code, Linkedin, Mail, Phone, ExternalLink, GithubIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-display font-bold text-white">
                Suresh<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="text-dark-400 mb-4 max-w-xs">
             Aspiring Software Engineer | ECE Graduate | Web & Software Enthusiast | Passionate About Building Scalable Applications
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/suresh-adabala-8a3494259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/SureshAdabala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sureshadabala739@gmail.com"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+919347864386"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-display font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-dark-400">+91 9347864386</span>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-dark-400">sureshadabala739@gmail.com</span>
              </li>

              <li className="flex items-start space-x-3">
                <Linkedin className="h-5 w-5 text-primary-500 mt-0.5" />
                <a 
                  href="https://www.linkedin.com/in/suresh-adabala-8a3494259" 
                  className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <GithubIcon className="h-5 w-5 text-primary-500 mt-0.5" />
                <a 
                  href="https://github.com/SureshAdabala" 
                  className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Hub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 text-center">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Adabala Suresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;