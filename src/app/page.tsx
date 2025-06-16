import Link from 'next/link';
import { Hero, Services, Technology, Contact } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero name="hero" />
      <Services name="services" />
      <Technology name="technology" />
      <Contact name="contact" />
    </>
  );
}