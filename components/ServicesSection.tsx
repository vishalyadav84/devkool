import { Globe, Smartphone, Database, Zap, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
    features: ['Native Development', 'Cross-Platform', 'App Store Ready', 'Push Notifications']
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side solutions with secure APIs, databases, and cloud integration.',
    features: ['RESTful APIs', 'Database Design', 'Cloud Hosting', 'Security Implementation']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with advanced optimization techniques and best practices.',
    features: ['Code Optimization', 'Caching Strategies', 'CDN Integration', 'Performance Monitoring']
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Comprehensive security implementation to protect your applications and user data.',
    features: ['Data Encryption', 'Secure Authentication', 'Regular Audits', 'Compliance']
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: '24/7 technical support and regular maintenance to keep your applications running smoothly.',
    features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring']
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}