import Link from 'next/link';
import { FC } from 'react';

interface HeroProps {
  name: string;
}

const Hero: FC<HeroProps> = ({ name }) => {
  return (
    <div className="bg-gradient-to-r from-[#2C5282] to-[#4299E1] text-white" id={name}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate Medical Care for Your Well-being
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            TrustCare Medical Center was founded with the goal to set new standards
            of excellence in community patient care. We are dedicated to providing
            quality, patient-focused healthcare with innovative and responsible practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-appointment"
              className="bg-[#48BB78] hover:bg-[#38A169] text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-[#2C5282] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;