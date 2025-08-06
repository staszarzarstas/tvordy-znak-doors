import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <img 
        src="/background-header.svg" 
        alt="Фон секции" 
        className="hidden md:block w-screen max-w-none" 
        style={{margin:0,padding:0}} 
      />
      <img 
        src="/headSectionPhone.svg" 
        alt="Фон секции для мобильных" 
        className="block md:hidden w-screen max-w-none" 
        style={{margin:0,padding:0}} 
      />
      <About />
      <Catalog />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
