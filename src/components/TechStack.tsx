import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface TechStackProps {
  technologies: Technology[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-4xl mb-2 text-readybit-navy">{tech.icon}</div>
          <span className="text-sm font-medium text-gray-700">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};