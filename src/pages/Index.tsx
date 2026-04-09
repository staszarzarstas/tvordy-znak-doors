import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <picture className="hidden md:block w-screen max-w-none">
        <source srcSet="/headsectionn_результат.webp" type="image/webp" />
        <img 
          src="/background-header.svg" 
          alt="Фон секции" 
          className="w-screen max-w-none" 
          style={{margin:0,padding:0}} 
        />
      </picture>
      <picture className="block md:hidden w-screen max-w-none">
        <source srcSet="/headphonesection_результат.webp" type="image/webp" />
        <img 
          src="/headSectionPhone.svg" 
          alt="Фон секции для мобильных" 
          className="w-screen max-w-none" 
          style={{margin:0,padding:0}} 
        />
      </picture>
      <About />
      <Catalog />
      <Contacts />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
