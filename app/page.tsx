import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Brands from '@/components/Brands';
import Formats from '@/components/Formats';
import Technology from '@/components/Technology';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Ecosystem />
      <Brands />
      <Formats />
      <Technology />
      <Closing />
    </main>
  );
}
