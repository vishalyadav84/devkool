'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features, payment integration, and inventory management.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development'
  },
  {
    title: 'Healthcare Mobile App',
    description: 'Comprehensive healthcare application with appointment booking, telemedicine, and patient records.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    category: 'Mobile Development'
  },
  {
    title: 'Real Estate Portal',
    description: 'Advanced property listing platform with search filters, virtual tours, and agent management.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    category: 'Web Development'
  },
  {
    title: 'Food Delivery App',
    description: 'Full-stack food delivery solution with real-time tracking, payments, and restaurant management.',
    image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'Express.js'],
    category: 'Mobile Development'
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform with course management, video streaming, and progress tracking.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    category: 'Web Development'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness application with workout plans, nutrition tracking, and social features.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Swift', 'Kotlin', 'Firebase'],
    category: 'Mobile Development'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful projects and satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-medium">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}