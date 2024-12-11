import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ServiceCard } from '@/components/ServiceCard';
import { TechStack } from '@/components/TechStack';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { Database, Server, Code, Terminal, Coffee, Cpu, HardDrive, Network, Building, Users, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

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

  const clients = [
    {
      name: "Croatian Telecom",
      description: "Telecommunications sector",
      icon: <Building className="w-12 h-12" />,
    },
    {
      name: "Atos/Eviden",
      description: "Digital transformation services",
      icon: <Users className="w-12 h-12" />,
    },
    {
      name: "BISS",
      description: "Business solutions",
      icon: <Building className="w-12 h-12" />,
    },
    {
      name: "Aimago digital",
      description: "Digital innovation",
      icon: <Users className="w-12 h-12" />,
    },
  ];

  const workflowSteps = [
    {
      title: "Initial Consultation",
      description: "Understanding your needs and project requirements",
      icon: <Coffee className="w-8 h-8" />,
    },
    {
      title: "Analysis & Planning",
      description: "Detailed technical analysis and solution design",
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: "Development",
      description: "Implementing robust backend solutions",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing and quality assurance",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
    {
      title: "Deployment",
      description: "Smooth deployment and integration",
      icon: <ArrowRight className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-readybit-light/20">
      {/* Hero Section */}
      <ParallaxSection className="min-h-screen flex items-center justify-center px-4 relative">
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
        <ScrollIndicator />
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

      {/* Clients Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-readybit-navy"
          >
            Trusted By
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-readybit-purple mb-4">{client.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-readybit-navy">{client.name}</h3>
                <p className="text-gray-600 text-center">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <ParallaxSection className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-readybit-navy"
          >
            How We Work
          </motion.h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-readybit-light hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="bg-white p-4 rounded-full shadow-lg mb-4 z-10">
                    <div className="text-readybit-purple">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-readybit-navy text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
