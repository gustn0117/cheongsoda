import CallCTA from './components/CallCTA';
import FAQ from './components/FAQ';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Process from './components/Process';
import PromoBanner from './components/PromoBanner';
import Promises from './components/Promises';
import QuoteForm from './components/QuoteForm';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import TrustBar from './components/TrustBar';
import TrustStrip from './components/TrustStrip';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <TrustStrip />
        <Stats />
        <Services />
        <Process />
        <Promises />
        <Showcase />
        <PromoBanner />
        <Reviews />
        <Pricing />
        <CallCTA />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
