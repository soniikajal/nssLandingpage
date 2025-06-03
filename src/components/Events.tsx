
import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Health Camp",
      date: "Dec 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Village Community Center",
      participants: "50+ Volunteers",
      description: "Free health checkups, medicine distribution, and health awareness sessions for rural communities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Tree Plantation Drive",
      date: "Dec 22, 2024",
      time: "7:00 AM - 11:00 AM",
      location: "NSUT Campus & Nearby Areas",
      participants: "100+ Volunteers",
      description: "Large-scale tree plantation initiative to contribute to environmental conservation and green campus development.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Digital Literacy Workshop",
      date: "Jan 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Local Government School",
      participants: "30+ Volunteers",
      description: "Teaching basic computer skills and digital literacy to students and adults in underserved communities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const pastEvents = [
    {
      title: "Blood Donation Camp",
      date: "Nov 15, 2024",
      impact: "150 units collected",
      participants: "200+ volunteers"
    },
    {
      title: "Cleanliness Drive",
      date: "Oct 28, 2024",
      impact: "5 communities cleaned",
      participants: "80+ volunteers"
    },
    {
      title: "Educational Support Program",
      date: "Oct 10, 2024",
      impact: "300 children benefited",
      participants: "60+ volunteers"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our upcoming events and see the impact we've made 
            through our community service initiatives.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-blue-600" />
                      {event.participants}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Impact */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">{event.impact}</div>
                  <div className="text-sm text-gray-600">{event.participants}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest events and volunteer opportunities
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
