import { Award, Users, Wrench } from 'lucide-react';
import aboutUsImage from '../../Твердый_знак/aboutUs.png'; // Правильный путь к изображению

const About = () => {
  return (
    <section id="about" className="pt-0 pb-20 bg-white">
      <img 
        src={aboutUsImage} 
        alt="О нашей компании - Твердый знак"
        className="block w-screen max-w-none h-auto m-0 p-0"
        style={{display:'block',margin:0,padding:0}}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4"></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
              <Award className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">15+ лет опыта</h3>
            <p className="text-gray-600">
              Более 15 лет успешной работы в сфере производства и установки входных дверей
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
              <Users className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">10000+ клиентов</h3>
            <p className="text-gray-600">
              Тысячи довольных клиентов доверили нам безопасность своих домов
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
              <Wrench className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Гарантия качества</h3>
            <p className="text-gray-600">
              Полная гарантия на все виды работ и используемые материалы
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-charcoal to-charcoal-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Наши преимущества</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Собственное производство</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Индивидуальный подход к каждому клиенту</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Конкурентные цены без посредников</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Профессиональная установка</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Послегарантийное обслуживание</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-gold mb-4">Бесплатная консультация</h4>
                <p className="mb-6">Получите профессиональную консультацию по выбору двери</p>
                <button className="bg-gold hover:bg-gold-600 text-charcoal font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
