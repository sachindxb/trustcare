import React, { FC } from 'react';

interface ServicesProps {
  name: string;
}

const Services: FC<ServicesProps> = ({ name }) => {
  const services = [
    {
      title: "Cosmetic Dermatology",
      items: [
        "Laser Hair Removal",
        "Facial Injections",
        "Mesotherapy",
        "Skin Booster Injection",
        "PRP Treatment",
      ]
    },
    {
      title: "Non-Cosmetic Dermatology",
      items: [
        "Skin itching, rashes",
        "Abnormal skin growths",
        "Skin lesions",
        "Cutaneous pain",
        "Eczema",
        "Psoriasis",
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id={name}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2C5282] mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2C5282] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-[#48BB78]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;