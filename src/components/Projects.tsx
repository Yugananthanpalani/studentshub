import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  category: string;
  liveDemo?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'CAREER NEST',
    description: 'Career Nest : A Smart place for students to showcase , monitor and track their achievements and progress.',
    techStack: ['HTML', 'CSS', 'JS',],
    category: 'Web',
    liveDemo: 'https://career-nest-pro.vercel.app/',
    github: '#',
    image: 'https://ik.imagekit.io/ul4fxruo1/career.png?updatedAt=1762532428781',
  },
  {
    name: 'ALGOVERSE',
    description: 'Vendor-Trainer Management platform streamlining recruitment and training coordination for enterprises.',
    techStack: ['HTML', 'CSS', 'JS',],
    category: 'Web',
    liveDemo: 'https://algoversesm.netlify.app/',
    github: '#',
    image: 'https://ik.imagekit.io/ul4fxruo1/image.png?updatedAt=1762532283510',
  },
  {
    name: 'Ezhuthu',
    description: 'Ezhuthu: A secure, real-time collaborative text editor with end-to-end encryption for privacy-focused users.',
    techStack: ['React', 'WebRTC', 'Socket.io', 'Encryption'],
    category: 'Web',
    liveDemo: 'https://ezhuthu.vercel.app/',
    github: '#',
    image: 'https://ik.imagekit.io/ul4fxruo1/eluthu.png?updatedAt=1762532653093',
  },
  {
    name: 'SCRAMBLE',
    description: 'Scramble: An engaging word puzzle game that challenges players to unscramble jumbled words within a time limit.',
    techStack: ['React Native', 'Expo', 'JavaScript'],
    category: 'Game',
    liveDemo: 'https://scramb.vercel.app/',
    github: '#',
    image: 'https://ik.imagekit.io/ul4fxruo1/scramble.jpg?updatedAt=1762532835325',
  },
];

const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Our Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8" />

          <div className="flex flex-wrap justify-center gap-3 items-center">
            <Filter className="w-5 h-5 text-purple-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl blur-md" />
                </div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
