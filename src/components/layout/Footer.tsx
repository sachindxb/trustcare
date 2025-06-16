import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C5282] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#48BB78]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#48BB78]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#48BB78]">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#48BB78]">Contact</Link></li>
              <li><Link href="/book-appointment" className="hover:text-[#48BB78]">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <p>United Arab Emirates</p>
                <p>Dubai Healthcare City</p>
                <p>Building A, 2nd Floor</p>
              </li>
              <li>
                <p>Email: info@trustcare.com</p>
                <p>Phone: +971 4 XXX XXXX</p>
                <p>WhatsApp: +971 50 XXX XXXX</p>
              </li>
              <li>
                <p>Saturday – Thursday: 09:00 am To 09:00 pm</p>
                <p>Friday: Closed</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-[#48BB78]">Cosmetic Dermatology</Link></li>
              <li><Link href="/services" className="hover:text-[#48BB78]">Non-Cosmetic Dermatology</Link></li>
              <li><Link href="/services" className="hover:text-[#48BB78]">Laser Hair Removal</Link></li>
              <li><Link href="/services" className="hover:text-[#48BB78]">Facial Injections</Link></li>
              <li><Link href="/services" className="hover:text-[#48BB78]">Mesotherapy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              TrustCare Medical Center was founded with the goal to set new standards of excellence in community patient care. We are dedicated to providing quality, patient-focused and cost-effective healthcare by implementing innovative and responsible practices.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} TrustCare Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}