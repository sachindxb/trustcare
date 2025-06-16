import React, { FC } from 'react';

interface TechnologyProps {
  name: string;
}

const Technology: FC<TechnologyProps> = ({ name }) => {
  const technologies = [
    {
      name: "Hydracool plus",
      description: "Advanced technique for deep skin penetration through high-speed water and O2 infusion.",
      icon: "💧"
    },
    {
      name: "GentleMax Pro (CANDELA)",
      description: "State-of-the-art laser technology for superior treatment results and patient comfort.",
      icon: "⚡"
    },
    {
      name: "Venus Viva™",
      description: "Revolutionary skin resurfacing technology for facial remodeling and skin rejuvenation.",
      icon: "✨"
    },
    {
      name: "Venus Legacy",
      description: "Advanced body contouring and skin tightening solution for multiple body areas.",
      icon: "🔮"
    }
  ];

  return (
    <section className="py-16 bg-white" id={name}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2C5282] mb-4">
          Technology At Our Clinic
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We utilize the latest medical technologies to provide the best possible care for our patients
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-[#2C5282] mb-3 text-center">
                {tech.name}
              </h3>
              <p className="text-gray-600 text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;