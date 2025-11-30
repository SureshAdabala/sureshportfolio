import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ChevronDown, Send, Eye } from 'lucide-react';
import "./index.css"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-hero-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1"
          >
            <div className="overflow-hidden rounded-full border-4 border-primary-500 w-96 h-96 mx-auto lg:ml-auto lg:mr-8 animate-move">
              <img
                src="/images/suresh.jpg"
                alt="Adabala Suresh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4">
                <span className="text-white">Hi, I'm </span>
                <span className="gradient-text">Adabala Suresh</span>
              </h1>

              <h2 className="text-lg md:text-xl text-dark-300 mb-6">
                Aspiring Software Engineer | ECE Graduate | Web & Software Enthusiast |
                Passionate About Building Scalable Applications
              </h2>

              <p className="text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Passionate about combining software and modern web technologies to build innovative solutions.
                I specialize in Full Stack Java Development, Spring Boot, and frontend & backend web applications.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/resume/Resume.pdf"  // Note: no 'public/' here
                  download
                  className="btn btn-primary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-secondary cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Contact Me
                </Link>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-accent cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

    </section>
  );
};

export default Hero;