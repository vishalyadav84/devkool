import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Target, Award, Coffee, Code, Heart } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { number: '15+', label: 'Projects Completed' },
  { number: '8+', label: 'Happy Clients' },
  { number: '1+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, ensuring transparent communication and collaborative development processes.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We maintain the highest standards of code quality, testing, and user experience in every project we deliver.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our team is passionate about creating digital solutions that make a real difference for businesses and users.'
  }
];

const team = [
  {
    name: 'Shivam Singh',
    position: 'Founder & Lead Developer',
    image: '#',
    description: 'Full-stack developer with 2+ years of experience in modern web technologies.'
  },
  {
    name: 'Vishal Yadav',
    position: 'Backend Development',
    image: '#',
    description: 'Specialized in Node.js, Express, Django, and PostgreSQL for scalable backend development..'
  },
  {
    name: 'Adarsh Dubey',
    position: 'UI/UX Designer',
    image: '#',
    description: 'Creative designer focused on creating beautiful and intuitive user experiences.'
  },
  {
    name: 'Piyush Chaturvedi',
    position: 'Mobile App Developer',
    image: '#',
    description: 'Specialized in React Native and Flutter for cross-platform mobile development.'
  },
  {
    name: 'Abhishek Yadav',
    position: 'Web Development',
    image: '#',
    description: 'Expert in responsive, high-performance web apps using React, Next.js, and Vue.js, with API and CMS integration.'
  }
];

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevKool</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of developers and designers based in Noida, dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2025, DevKool emerged from a simple vision: to bridge the gap between innovative ideas and their digital implementation. Based in the tech hub of Noida, we've grown from a small startup to a trusted partner for businesses seeking digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a commitment to excellence and a passion for cutting-edge technology. Today, we're proud to have helped numerous businesses establish their digital presence and achieve their goals through our comprehensive web and mobile solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Coffee className="h-8 w-8 text-blue-600" />
                <span className="text-gray-600">Fueled by coffee and powered by passion</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}

      <WhatsAppButton />
      <Footer />
    </main>
  );
}