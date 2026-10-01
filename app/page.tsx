import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Brands from '@/components/Brands';
import Formats from '@/components/Formats';
import Technology from '@/components/Technology';
import Roadmap from '@/components/Roadmap';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';
import MotionController from '@/components/MotionController';

export default function Home() {
  return (
    <>
      <MotionController />
      <Header />
      <main id="main-content">
        <Hero />
        <Ecosystem />
        <Brands />
        <Formats />
        <Technology />
        <Roadmap />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
