const MapSection = () => {
  // Привязка к конкретному адресу (без необходимости в JS API-ключе)
  const address = "Краснодарский край, Крымск, ул. Маршала Жукова, 53K";
  const src = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(address)}&z=17&l=map`;

  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Мы на карте</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {address}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
          <iframe
            title="Яндекс Карты"
            src={src}
            className="w-full h-[420px] md:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

