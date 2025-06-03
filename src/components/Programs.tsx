
import React from 'react';
import { Leaf, GraduationCap, HeartHandshake, Shield } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description: "Tree plantation drives, waste management initiatives, and awareness campaigns for sustainable living.",
      features: ["Tree Plantation", "Waste Management", "Clean Energy Awareness", "Water Conservation"],
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Teaching underprivileged children, adult literacy programs, and educational resource distribution.",
      features: ["Teaching Programs", "Adult Literacy", "Digital Education", "Scholarship Support"],
      color: "blue"
    },
    {
      icon: HeartHandshake,
      title: "Community Welfare",
      description: "Health camps, blood donation drives, and support for elderly and differently-abled individuals.",
      features: ["Health Camps", "Blood Donation", "Elder Care", "Disability Support"],
      color: "red"
    },
    {
      icon: Shield,
      title: "Disaster Relief",
      description: "Emergency response, rehabilitation support, and disaster preparedness training programs.",
      features: ["Emergency Response", "Relief Distribution", "Preparedness Training", "Rehabilitation"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600 hover:bg-green-50",
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-50",
      red: "bg-red-100 text-red-600 hover:bg-red-50",
      orange: "bg-orange-100 text-orange-600 hover:bg-orange-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of community service programs designed to create 
            meaningful impact across various sectors of society.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getColorClasses(program.color)}`}>
                  <program.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join our programs and be part of positive change in the community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Register for Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Volunteer Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
