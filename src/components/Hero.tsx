const Hero = () => {
  const handleConsultation = () => {
    const phoneNumber = "79615882506"; // номер без пробелов и знаков
    const message = encodeURIComponent("Здравствуйте! Меня интересует консультация по входным дверям.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Надёжные <span className="text-gold">входные двери</span> для вашей безопасности
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Широкий выбор металлических дверей, входных групп и бронированных конструкций. 
            Качество, проверенное временем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleConsultation}
              className="bg-gold hover:bg-gold-600 text-charcoal font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Получить консультацию
            </button>
            <a
              href="#catalog"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Смотреть каталог
            </a>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Установленных дверей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">5 лет</div>
              <div className="text-gray-300">Гарантии на продукцию</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">24/7</div>
              <div className="text-gray-300">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
