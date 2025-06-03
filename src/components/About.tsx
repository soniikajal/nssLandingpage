
import React from 'react';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To develop the personality and character of students through voluntary community service and promote national integration."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building bridges between the campus and community through meaningful social initiatives and sustainable development programs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in all our endeavors while maintaining the highest standards of integrity and commitment."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Fostering continuous learning and skill development through hands-on experience in social work and community development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About NSS NSUT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The National Service Scheme at NSUT is dedicated to fostering social consciousness 
            and developing leadership qualities among students through community service.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="NSS Team" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Empowering Students Through Service
            </h3>
            <p className="text-gray-600 leading-relaxed">
              NSS NSUT has been at the forefront of student-led community service initiatives, 
              creating opportunities for personal growth while addressing societal challenges. 
              Our programs are designed to instill values of social responsibility and civic engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through our diverse range of activities - from rural development programs to 
              environmental conservation drives - we aim to create socially conscious leaders 
              who can contribute meaningfully to nation-building.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
