import { motion } from 'framer-motion';
import { Code, Users, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to create groundbreaking solutions.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'Our strength lies in teamwork, diverse perspectives, and shared commitment to excellence.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'We move fast, iterate quickly, and deliver high-quality products that make an impact.',
  },
  {
    icon: Target,
    title: 'Purpose Driven',
    description: 'Every project we build solves real problems and creates meaningful value for users.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
            About Students Hub
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8" />

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We are a passionate collective of student innovators dedicated to transforming ideas into impactful digital solutions. Our mission is to leverage technology to solve real-world problems while continuously learning and growing together.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From AI-powered applications to elegant web platforms, we bring diverse skills and unified vision to every project we undertake. Our collaborative approach and commitment to excellence drive us to create products that matter.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl blur-md" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
            <p className="relative text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Building the Future, One Project at a Time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
