import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Technology from '@/components/sections/Technology';
import Contact from '@/components/sections/Contact';
import BookAppointment from '@/components/sections/BookAppointment';

export default function Home() {
  return (
    <>
      <Hero name="hero" />
      <Services name="services" />
      <Technology name="technology" />
      <Contact name="contact" />
      <BookAppointment name="book-appointment" />
    </>
  );
}