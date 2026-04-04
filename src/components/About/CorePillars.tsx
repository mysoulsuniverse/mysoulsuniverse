import React from 'react';
import { FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Adjust if you are using Next.js or a different router

const CorePillars = () => {
  const pillars = [
    {
      title: "Emotional & Mental Wellbeing",
      description: "Build resilience, manage stress, and strengthen mental health with psychosocial support and guided coaching sessions.",
      icon: <FiHeart size={32} />
    },
    {
      title: "Personal Growth & Identity Development",
      description: "Gain confidence, clarify purpose, and develop self-leadership skills through personalized coaching, journaling, and reflection exercises.",
      icon: <FiTrendingUp size={32} />
    },
    {
      title: "Workplace & Organizational Wellness",
      description: "Strengthen team communication, collaboration, and culture with interactive team building workshops and leadership coaching.",
      icon: <FiUsers size={32} />
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-dark-green mb-6">
          Our Core Pillars: How We Help You Thrive
        </h2>
        <p className="text-gray-600 md:text-lg">
          At My Soul’s Universe, our three pillars form the foundation for lasting transformation. Each pillar is delivered through coaching, psychosocial support, and interactive team-building activities, ensuring practical outcomes for individuals and organizations alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5 mt-16">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-bg p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-pale-green text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-semibold text-dark-green mb-4">{pillar.title}</h3>
            <p className="text-gray-600">{pillar.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link 
          to="/services" 
          className="inline-block bg-dark-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all"
        >
          Discover Our Programs
        </Link>
      </div>
    </section>
  );
};

export default CorePillars;