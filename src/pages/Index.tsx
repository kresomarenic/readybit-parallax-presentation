import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ServiceCard } from '@/components/ServiceCard';
import { TechStack } from '@/components/TechStack';
import { Database, Server, Code, Terminal, Coffee, Cpu, HardDrive, Network } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Backend Development',
      description: 'Expert Java and Spring Boot development for robust, scalable applications.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Database Solutions',
      description: 'PostgreSQL and Oracle database design, optimization, and management.',
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive your business forward.',
      icon: <Coffee className="w-8 h-8" />,
    },
  ];

  const technologies = [
    { name: 'Java', icon: <Coffee /> },
    { name: 'Spring Boot', icon: <Terminal /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'Oracle', icon: <HardDrive /> },
    { name: 'Backend', icon: <Server /> },
    { name: 'API', icon: <Network /> },
    { name: 'Microservices', icon: <Cpu /> },
    { name: 'Clean Code', icon: <Code /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-readybit-light/20">
      {/* Hero Section */}
      <ParallaxSection className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src="/lovable-uploads/bee3c5ab-2b1b-4b5e-8663-a0a3b22bd512.png"
            alt="ReadyBIT Logo"
            className="w-64 md:w-96 mx-auto mb-8 animate-float"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-readybit-navy mb-4">
            Backend Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering robust backend solutions and IT consulting services
          </p>
        </motion.div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-readybit-navy"
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <ParallaxSection className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-readybit-navy"
          >
            Technology Stack
          </motion.h2>
          <TechStack technologies={technologies} />
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-readybit-navy">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your backend infrastructure? Let's discuss your project.
            </p>
            <a
              href="mailto:contact@readybit.com"
              className="inline-block px-8 py-3 bg-readybit-purple text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-readybit-dark"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;