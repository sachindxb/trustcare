import Link from 'next/link';
import { Hero, Services, Technology, BookAppointment, Contact } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero name="hero" />
      <Services name="services" />
      <Technology name="technology" />
      <BookAppointment name="book-appointment" />
      <Contact name="contact" />
    </>
  );
}