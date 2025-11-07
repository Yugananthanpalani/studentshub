import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-black dark:bg-gray-950 text-white py-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent">
        <motion.div
          className="h-full w-1/3 bg-purple-500 blur-sm"
          animate={{
            x: ['-100%', '300%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Students Hub
            </h3>
            <p className="text-gray-400 text-sm">
              Building the Future, One Project at a Time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>© 2025 Students Hub</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="#projects"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Team
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-purple-500 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '20%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </footer>
  );
};
