import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Send, 
  Phone, 
  Mail, 
  Linkedin, 
  Download,
  Github
} from 'lucide-react';
import emailjs from 'emailjs-com';  // Import EmailJS SDK

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs.send(
      'service_yy08rr8', // Replace with your service ID
      'template_m93wmkr', // Replace with your template ID
      formValues,
      'QSI_xnSKO8G0nvsM7' // Replace with your user ID
    )
    .then(
      () => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormValues({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      },
      (error) => {
        setIsSubmitting(false);
        console.error("Email send failed", error);
      }
    );
  };

  return (
    <AnimatedSection id="contact" className="bg-gradient-to-b from-background-dark to-dark-950">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <p className="section-subtitle fade-in">
        Have a question or want to work together? Feel free to contact me!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="card fade-in">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formValues.name}
                onChange={handleChange}
                className="w-full p-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formValues.email}
                onChange={handleChange}
                className="w-full p-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formValues.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitSuccess && (
              <div className="mt-4 p-3 bg-success-900/20 border border-success-700 rounded-lg text-success-400 text-center">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
            
            <div className="card flex items-start gap-4">
            <div className="text-primary-500 p-3 bg-primary-900/30 rounded-lg">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Phone</h4>
              <a
                href="tel:+919347864386"
                className="text-dark-300 hover:text-primary-400 transition-colors"
                aria-label="Call phone number +91 9347864386"
              >
                +91 93478 64386
              </a>
            </div>
          </div>

          <div className="card flex items-start gap-4">
            <div className="text-primary-500 p-3 bg-primary-900/30 rounded-lg">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Email</h4>
              <a
                href="mailto:sureshadabala739@gmail.com"
                className="text-dark-300 hover:text-primary-400 transition-colors"
                aria-label="Send an email to sureshadabala739@gmail.com"
              >
                sureshadabala0836@gmail.com
              </a>
            </div>
          </div>

            <div className="card flex items-start gap-4">
              <div className="text-primary-500 p-3 bg-primary-900/30 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/suresh-adabala-8a3494259" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  linkedin.com/in/suresh-adabala-8a3494259
                </a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <div className="text-primary-500 p-3 bg-primary-900/30 rounded-lg">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">GitHub</h4>
                <a 
                  href="https://github.com/SureshAdabala" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  github.com/SureshAdabala
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
