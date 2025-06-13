import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Globe, Smartphone, Database, Palette, Search, Headphones, Zap, Shield, Code, Users } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: [
      'Responsive Design',
      'Modern Frameworks (React, Next.js, Vue.js)',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Integration'
    ],
    pricing: 'Starting from ₹20,000'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native iOS & Android Apps',
      'Cross-platform Development',
      'React Native & Flutter',
      'App Store Optimization',
      'Push Notifications',
      'In-app Purchases'
    ],
    pricing: 'Starting from ₹50,000'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side solutions with secure APIs and database management.',
    features: [
      'RESTful API Development',
      'Database Design & Optimization',
      'Cloud Integration (AWS, GCP)',
      'Microservices Architecture',
      'Authentication & Security',
      'Performance Optimization'
    ],
    pricing: 'Starting from ₹30,000'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with exceptional user experiences.',
    features: [
      'User Interface Design',
      'User Experience Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Mobile-first Design',
      'Accessibility Design'
    ],
    pricing: 'Starting from ₹15,000'
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence with comprehensive SEO and marketing strategies.',
    features: [
      'Search Engine Optimization',
      'Google Ads Management',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Reporting',
      'Local SEO'
    ],
    pricing: 'Starting from ₹10,000/month'
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: '24/7 technical support and regular maintenance for your applications.',
    features: [
      '24/7 Technical Support',
      'Regular Updates & Patches',
      'Performance Monitoring',
      'Bug Fixes & Troubleshooting',
      'Backup & Recovery',
      'Security Updates'
    ],
    pricing: 'Starting from ₹5,000/month'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We understand your requirements, goals, and create a detailed project roadmap.'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes and prototypes to visualize your project.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers bring your project to life using the latest technologies.'
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your application is bug-free and performs optimally.'
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support and maintenance.'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-semibold text-blue-600">{service.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}