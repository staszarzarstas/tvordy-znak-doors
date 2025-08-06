import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }

    // Формируем сообщение для WhatsApp
    const phoneNumber = "79528129901";
    const whatsappMessage = `🔔 ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК
    
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
${formData.message ? `💬 Сообщение: ${formData.message}` : ''}

Отправлено с сайта "Твердый знак"`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Открываем WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Очищаем форму
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
    
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="contacts" className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь вам с выбором!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gold">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Телефон</h4>
                  <p className="text-gray-300">8 (952)-812-99-01</p>
                  <p className="text-gray-300">8 (861)-315-24-54</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-300">dverieva@list.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Адрес</h4>
                  <p className="text-gray-300">г. Крымск, ул. Маршала Жукова, 53K</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Время работы</h4>
                  <p className="text-gray-300">Пн-Пт: 8:00 - 17:00</p>
                  <p className="text-gray-300">Сб: 9:00 - 16:00</p>
                  <p className="text-gray-300">Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gold">Заказать обратный звонок</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение (необязательно)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                  placeholder="Расскажите о ваших потребностях"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-600 text-charcoal font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Отправить заявку
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
