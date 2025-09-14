import React, { useEffect } from 'react';
import ElectricBorder from '../components/ElectricBorder';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
  {
    tag: 'Web',
    title: 'Portfolio Website',
    description: 'A responsive portfolio site built with React and TailwindCSS.',
    versions: ['v1.0', 'yarndev']
  },
  {
    tag: 'App',
    title: 'E-Commerce App',
    description: 'Full-stack app with React, Node.js, and MongoDB.',
    versions: ['v2.1', 'beta']
  },
  {
    tag: 'AI',
    title: 'AI Chatbot',
    description: 'Chatbot integrated with OpenAI API for conversational AI.',
    versions: ['v1.3', 'alpha']
  },
  {
    tag: 'Game',
    title: 'Game Development',
    description: '2D platformer game made with Phaser.js and Canvas API.',
    versions: ['v0.9', 'dev']
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="zoom-in"
      className="py-16 px-8 rounded-2xl"
      style={{
        background: 'rgba(40,40,40,0.7)', // xám mờ
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectData.map((project, index) => (
          <ElectricBorder
            key={index}
            color="#5D2F77"
            speed={1.5}
            chaos={1}
            thickness={2}
            className="relative p-6 h-72 flex flex-col justify-between bg-black/20 rounded-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ borderRadius: '1rem' }}
            data-aos="fade-up"
            data-aos-delay={index * 150} // hiệu ứng delay từng card
          >
            {/* Small span tag on top */}
            <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
              {project.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.versions.map((v, idx) => (
                <span
                  key={idx}
                  className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
                >
                  {v}
                </span>
              ))}
              <button className="border-2 text-white border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                Preview Now
              </button>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </section>
  );
};

export default Project;
