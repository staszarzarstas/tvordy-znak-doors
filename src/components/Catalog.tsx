import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

// Импорт изображений для карточек (без фона)
import comfortNKNoFon from '../../Твердый_знак/door-no-fon/комфортНКфото-Photoroom.png';
import comfortNK5NoFon from '../../Твердый_знак/door-no-fon/комфортНК5фото-Photoroom.png';
import comfortNK6NoFon from '../../Твердый_знак/door-no-fon/комфортНК6фото-Photoroom.png';
import comfortNK47NoFon from '../../Твердый_знак/door-no-fon/комфортНК47фото-Photoroom.png';
import nk48NoFon from '../../Твердый_знак/door-no-fon/нк48фото-Photoroom.png';
import nk49NoFon from '../../Твердый_знак/door-no-fon/нк49-Photoroom.png';
import nk50NoFon from '../../Твердый_знак/door-no-fon/нк50фото-Photoroom.png';
import prestizhLongNoFon from '../../Твердый_знак/door-no-fon/престижЛонгФото-Photoroom.png';
import liderTermoNoFon from '../../Твердый_знак/door-no-fon/лидерТермоФото-Photoroom.png';
import liderNoFon from '../../Твердый_знак/door-no-fon/лидерФото-Photoroom.png';
import brizNoFon from '../../Твердый_знак/door-no-fon/бризФото-Photoroom.png';
import amrataNoFon from '../../Твердый_знак/door-no-fon/амратаФото-Photoroom.png';
import avangardNoFon from '../../Твердый_знак/door-no-fon/авангардФото-Photoroom.png';
import fregatNoFon from '../../Твердый_знак/door-no-fon/фрегатФото-Photoroom.png';
import rifNoFon from '../../Твердый_знак/door-no-fon/рифФото-Photoroom.png';
import gavanNoFon from '../../Твердый_знак/door-no-fon/гаваньФото-Photoroom.png';
import vympelNoFon from '../../Твердый_знак/door-no-fon/вымпелФото-Photoroom.png';
import mechtaNoFon from '../../Твердый_знак/door-no-fon/мечтаФото-Photoroom.png';
import volnaNoFon from '../../Твердый_знак/door-no-fon/волнаФото-Photoroom.png';
import lagunaNoFon from '../../Твердый_знак/door-no-fon/лагунаДверь-Photoroom.png';

// Импорт изображений для модального окна (с фоном)
import comfortNK from '../../Твердый_знак/doors/комфортНКфото.png';
import comfortNK5 from '../../Твердый_знак/doors/комфортНК5фото.png';
import comfortNK6 from '../../Твердый_знак/doors/комфортНК6фото.png';
import comfortNK47 from '../../Твердый_знак/doors/комфортНК47фото.png';
import nk48 from '../../Твердый_знак/doors/нк48фото.png';
import nk49 from '../../Твердый_знак/doors/нк49.png';
import nk50 from '../../Твердый_знак/doors/нк50фото.png';
import prestizhLong from '../../Твердый_знак/doors/престижЛонгФото.png';
import liderTermo from '../../Твердый_знак/doors/лидерТермоФото.png';
import lider from '../../Твердый_знак/doors/лидерФото.png';
import briz from '../../Твердый_знак/doors/бризФото.png';
import amrata from '../../Твердый_знак/doors/амратаФото.png';
import avangard from '../../Твердый_знак/doors/авангардФото.png';
import fregat from '../../Твердый_знак/doors/фрегатФото.png';
import rif from '../../Твердый_знак/doors/рифФото.png';
import gavan from '../../Твердый_знак/doors/гаваньФото.png';
import vympel from '../../Твердый_знак/doors/вымпелФото.png';
import mechta from '../../Твердый_знак/doors/мечтаФото.png';
import volna from '../../Твердый_знак/doors/волнаФото.png';
import laguna from '../../Твердый_знак/doors/лагунаДверь.png';

const Catalog = () => {
  const [showAllCatalog, setShowAllCatalog] = useState(false);
  const [selectedDoor, setSelectedDoor] = useState<null | {
    title: string;
    description: string;
    features: string[];
    price: string;
    image: string;
    cardImage: string;
  }>(null);

  const doorTypes = [
    {
      title: "Комфорт НК",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: comfortNK,
      cardImage: comfortNKNoFon
    },
    {
      title: "Комфорт НК 5",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: comfortNK5,
      cardImage: comfortNK5NoFon
    },
    {
      title: "Комфорт НК 6",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: comfortNK6,
      cardImage: comfortNK6NoFon
    },
    {
      title: "Комфорт НК 47",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: comfortNK47,
      cardImage: comfortNK47NoFon
    },
    {
      title: "НК 48",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: nk48,
      cardImage: nk48NoFon
    },
    {
      title: "НК 49",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: nk49,
      cardImage: nk49NoFon
    },
    {
      title: "НК 50",
      description: "Надёжные металлические двери с повышенной защитой",
      features: ["Толщина металла 2мм", "Многоточечный замок", "Терморазрыв"],
      price: "от 85 000 ₽",
      image: nk50,
      cardImage: nk50NoFon
    },
    {
      title: "Престиж Лонг",
      description: "Элитные входные группы для частных домов",
      features: ["Панорамное остекление", "Автоматические замки", "Дизайнерские решения"],
      price: "от 150 000 ₽",
      image: prestizhLong,
      cardImage: prestizhLongNoFon
    },
    {
      title: "Лидер Термо",
      description: "Максимальная степень защиты для особых объектов",
      features: ["Класс защиты Б7", "Пулестойкое стекло", "Биометрические замки"],
      price: "от 45 000 ₽",
      image: liderTermo,
      cardImage: liderTermoNoFon
    },
    {
      title: "Лидер",
      description: "Максимальная степень защиты для особых объектов",
      features: ["Класс защиты Б7", "Пулестойкое стекло", "Биометрические замки"],
      price: "от 45 000 ₽",
      image: lider,
      cardImage: liderNoFon
    },
    {
      title: "Бриз",
      description: "Традиционные входные двери в классическом стиле",
      features: ["Натуральная древесина", "Ручная отделка"],
      price: "от 65 000 ₽",
      image: briz,
      cardImage: brizNoFon
    },
    {
      title: "Амрата",
      description: "Традиционные входные двери в классическом стиле",
      features: ["Натуральная древесина", "Ручная отделка"],
      price: "от 65 000 ₽",
      image: amrata,
      cardImage: amrataNoFon
    },
    {
      title: "Авангард",
      description: "Минималистичные входные двери в современном стиле",
      features: ["Скрытые петли", "Умные замки", "LED-подсветка"],
      price: "от 120 000 ₽",
      image: avangard,
      cardImage: avangardNoFon
    },
    {
      title: "Фрегат",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: fregat,
      cardImage: fregatNoFon
    },
    {
      title: "Риф",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: rif,
      cardImage: rifNoFon
    },
    {
      title: "Гавань",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: gavan,
      cardImage: gavanNoFon
    },
    {
      title: "Вымпел",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: vympel,
      cardImage: vympelNoFon
    },
    {
      title: "Мечта",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: mechta,
      cardImage: mechtaNoFon
    },
    {
      title: "Волна",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: volna,
      cardImage: volnaNoFon
    },
    {
      title: "Лагуна",
      description: "Эксклюзивные входные двери премиум-класса",
      features: ["Индивидуальный дизайн", "Драгоценные металлы", "Ручная работа"],
      price: "от 150 000 ₽",
      image: laguna,
      cardImage: lagunaNoFon
    }
  ];

  const displayedDoors = showAllCatalog ? doorTypes : doorTypes.slice(0, 6);

  const handleShowAllCatalog = () => {
    setShowAllCatalog(true);
  };

  const handleShowDetails = (door: typeof doorTypes[0]) => {
    setSelectedDoor(door);
  };

  const handleCloseModal = () => {
    setSelectedDoor(null);
  };

  return (
    <section id="catalog" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Каталог продукции</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент входных дверей для любых потребностей и бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedDoors.map((door, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-64 relative">
                <img 
                  src={door.cardImage} 
                  alt={door.title}
                  className="w-full h-full object-contain scale-125 transform-gpu"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 mt-2 text-center">{door.title}</h3>
              <div className="p-6">
                <button 
                  onClick={() => handleShowDetails(door)}
                  className="w-full bg-charcoal hover:bg-charcoal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAllCatalog && (
          <div className="text-center">
            <button 
              onClick={handleShowAllCatalog}
              className="bg-gold hover:bg-gold-600 text-charcoal font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Посмотреть весь каталог
            </button>
          </div>
        )}

        {/* Модальное окно */}
        {selectedDoor && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="p-6">
                  <div className="aspect-[4/3] relative mb-6">
                    <img
                      src={selectedDoor.image}
                      alt={selectedDoor.title}
                      className="w-full h-full object-contain bg-gray-100 rounded-lg scale-125 transform-gpu"
                      style={{ maxHeight: '80vh' }}
                    />
                  </div>
                  {/* <h3 className="text-2xl font-bold text-charcoal mb-3">{selectedDoor.title}</h3> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
