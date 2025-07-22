const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Твердый знак</h3>
            <p className="text-gray-300 mb-4">
              Надёжные входные двери для вашей безопасности и комфорта. 
              Качество, проверенное временем.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Твердый знак. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Входные двери</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Бронированные двери</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Установка и монтаж</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Гарантийное обслуживание</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>8 (952)-812-99-01</li>
              <li>8 (861)-315-24-54</li>
              <li>dverieva@list.ru</li>
              <li>ул. Маршала Жукова, 53K</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          {/* Фраза удалена по просьбе пользователя */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
