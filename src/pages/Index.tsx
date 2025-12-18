import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(8);

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startDate = new Date('2025-12-19').getTime();
    const now = new Date().getTime();
    const daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const calculatedSpots = Math.max(2, 8 - daysPassed);
    setSpotsLeft(calculatedSpots);
  }, []);

  const reasons = [
    {
      icon: "Award",
      title: "Авторитет вместо анонимности",
      description: "Ваш сайт создает образ серьезной компании. Вы не «частник на Авито», а профессиональный партнер"
    },
    {
      icon: "Zap",
      title: "Автоматизация вместо рутины",
      description: "Сайт работает на вас 24/7. AI-помощники анализируют рынок, генерируют контент и ведут диалог с клиентами"
    },
    {
      icon: "Unlock",
      title: "Свобода вместо ограничений",
      description: "Вы не зависите от блокировок, комиссий и правил чужих площадок. Вы владеете активом"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Погружение в систему",
      description: "Вы начинаете не с сайта, а с понимания модели. Мы даем методологию, учим работать с AI-помощниками и помогаем выбрать первую перспективную нишу"
    },
    {
      number: "02",
      title: "Создание вашего актива",
      description: "Только после этого вы создаете профессиональный сайт с помощью AI-помощников без навыков программирования"
    },
    {
      number: "03",
      title: "Привлечение клиентов на автопилоте",
      description: "Запускаем поток заявок по нашему плану (SEO, контекстная реклама) с использованием AI для генерации контента"
    },
    {
      number: "04",
      title: "Закрытие сделок и получение прибыли",
      description: "Вы ведете переговоры и заключаете контракты с нашей базой проверенных поставщиков. Вся аналитика и документы готовы"
    }
  ];

  const faq = [
    {
      q: "Нужны ли технические навыки для создания сайта?",
      a: "Нет. Вы будете использовать AI-конструкторы, которые создают сайт по вашему описанию. Навыки программирования не требуются."
    },
    {
      q: "Сколько времени займет запуск?",
      a: "Первые результаты (готовый сайт и первые заявки) за 10-14 дней. Первая сделка обычно происходит в течение месяца."
    },
    {
      q: "Какая поддержка предоставляется?",
      a: "Личный наставник, закрытое комьюнити, еженедельные групповые созвоны и доступ к базе проверенных поставщиков."
    },
    {
      q: "Что входит в инвестицию 34 999₽?",
      a: "Полный курс, доступ к AI-инструментам, личный наставник, база поставщиков, шаблоны документов и пожизненные обновления системы."
    },
    {
      q: "Что делать, если возникнут сложности?",
      a: "У вас будет личный наставник, закрытое комьюнити и еженедельные созвоны для решения любых вопросов на каждом этапе."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-heading font-bold">🎯 AI ДОХОД</h1>
          <Button size="lg" className="font-semibold bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
            Начать сейчас
          </Button>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="bg-gradient-to-br from-[#1A1F2C] via-[#0EA5E9]/10 to-[#1A1F2C] relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/20 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0EA5E9]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A1F2C]/50 to-[#1A1F2C]/80"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0EA5E9] via-[#F59E0B] to-purple-600 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/edited_image_20251211192738.png" 
                    alt="Neural Business Builder" 
                    className="w-full max-w-md object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <Badge className="text-xs md:text-sm font-semibold bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20">
                Новая модель заработка 2026
              </Badge>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight">
                  Хватит быть одним из многих
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-[#1A1F2C]">
                  Создайте свой B2B-сайт за 1 день и выходите на сделки от{" "}
                  <span className="text-[#0EA5E9]">20 000₽</span>
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Пока вы просматриваете объявления, умные игроки используют AI для создания бизнес-активов, 
                  которые приносят от <span className="font-bold text-[#1A1F2C]">200 000₽ в месяц</span>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#0EA5E9]/10 border-l-4 border-[#F59E0B] p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-[#1A1F2C]">
                  Ваша новая роль: <span className="text-[#0EA5E9]">Умный организатор</span>, а не уставший перекуп
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-10 py-6 md:py-8 font-bold shadow-2xl shadow-[#0EA5E9]/30 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 transition-all hover:scale-105 animate-pulse" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
                  <Icon name="Rocket" className="mr-2" size={24} />
                  Начать курс обучения
                </Button>
                <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-10 py-6 md:py-8 font-bold border-2 border-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white transition-all">
                  <Icon name="Play" className="mr-2" size={24} />
                  Как это работает
                </Button>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
                <p className="text-sm md:text-base font-bold text-red-800 flex items-center gap-2">
                  <Icon name="AlertTriangle" size={20} />
                  {spotsLeft <= 4 ? `Осталось всего ${spotsLeft} ${spotsLeft === 2 ? 'места' : spotsLeft === 3 || spotsLeft === 4 ? 'места' : 'мест'} по цене 34 999₽. Далее — 49 999₽` : `Осталось ${spotsLeft} мест по цене 34 999₽. Далее — 49 999₽`}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[#0EA5E9]">10-14</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Дней до первых заявок</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[#0EA5E9]">20 000₽</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Средний чек</div>
                </div>
                <div className="space-y-1 col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[#0EA5E9]">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Сайт работает за вас</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Urgency Banner with Timer */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm md:text-base font-bold flex items-center gap-2">
              <Icon name="Flame" size={20} />
              АКЦИЯ ЗАКАНЧИВАЕТСЯ 31 ДЕКАБРЯ 2025
            </p>
            <div className="flex gap-2 md:gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] text-center">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-xs opacity-90">дней</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] text-center">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs opacity-90">часов</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] text-center">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs opacity-90">минут</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] text-center">
                <div className="text-xl md:text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs opacity-90">секунд</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Message */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0EA5E9] to-[#F59E0B] rounded-full opacity-30 blur-xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/edited_image_20251210211832.png" 
                  alt="Иван - Руководитель AI ДОХОД" 
                  className="relative rounded-full shadow-2xl w-64 h-64 object-cover border-4 border-white"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-20 bg-gradient-to-b from-[#0EA5E9] to-[#F59E0B] rounded-full"></div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold">Иван</h3>
                  <p className="text-lg text-gray-600">Основатель AI ДОХОД</p>
                </div>
              </div>
              <blockquote className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
                <p className="font-semibold text-xl text-[#1A1F2C]">«Я лично провел 100+ студентов к их первым сделкам от 5 000₽»</p>
                <p>
                  За 3 года в B2B-посредничестве я понял одну вещь: <span className="font-bold text-[#0EA5E9]">технологии решают всё</span>. 
                  Раньше на запуск бизнеса уходило 3-6 месяцев. С AI — 10-14 дней.
                </p>
                <p>
                  Эта система работает. <span className="font-bold">Студенты зарабатывают от 100 000₽ до 500 000₽ в месяц</span>. 
                  И да, я вкладываю личное время в каждого — потому что ваш результат это моя репутация.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#0EA5E9] border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-[#F59E0B] border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-[#1A1F2C] border-2 border-white"></div>
                  </div>
                  <p className="text-sm font-semibold">
                    <span className="text-[#0EA5E9]">100+ учеников</span> уже получили первые сделки
                  </p>
                </div>
              </blockquote>
              <Button size="lg" className="text-lg px-8 py-6 font-bold bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 shadow-xl hover:scale-105 transition-all" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
                <Icon name="MessageCircle" className="mr-2" size={22} />
                СВЯЗАТЬСЯ С ИВАНОМ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 text-sm font-semibold">Ваши преимущества</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              Почему это работает там, где другие <span className="text-[#0EA5E9]">сдаются?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((reason, i) => (
              <Card key={i} className="border-2 hover:border-[#0EA5E9] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#1A1F2C] flex items-center justify-center mb-4">
                    <Icon name={reason.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-heading">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 text-sm font-semibold bg-[#F59E0B]/10 text-[#F59E0B]">
              Ваш путь к первой сделке
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              <span className="text-[#0EA5E9]">Четыре этапа</span> к вашей первой сделке
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Которые изменят ваш 2026 год. Первые результаты за 10-14 дней
            </p>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#1A1F2C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl md:text-5xl font-heading font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-transparent group-hover:border-[#0EA5E9] transition-all">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4">{step.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 p-6 md:p-10 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl animate-pulse">
            <p className="text-lg md:text-2xl font-bold text-[#1A1F2C] mb-2">
              ⚠️ Что вы теряете, откладывая решение?
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Пока вы читаете это, ваши потенциальные клиенты ищут партнеров. Каждый день без системы — 
              это упущенная прибыль от <span className="font-bold text-red-600">5 000 до 50 000₽</span> на сделках, 
              которые могли быть вашими.
            </p>
            <Button size="lg" className="mt-4 w-full md:w-auto text-lg px-8 py-6 font-bold bg-red-600 hover:bg-red-700" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
              <Icon name="TrendingUp" className="mr-2" size={22} />
              НЕ ТЕРЯТЬ ДЕНЬГИ — НАЧАТЬ СЕЙЧАС
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#0EA5E9]/20 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 text-sm font-semibold bg-[#F59E0B] text-white border-0">
              Инвестиция в себя
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              Которая окупится с <span className="text-[#F59E0B]">первых сделок</span>
            </h2>
          </div>
          
          <Card className="border-4 border-[#F59E0B] shadow-2xl bg-white text-[#1A1F2C] overflow-hidden">
            <div className="bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9] p-6 md:p-8 text-center">
              <p className="text-base md:text-lg font-semibold text-white mb-2">Полный доступ к системе</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-7xl font-heading font-bold text-white">34 999</span>
                <span className="text-2xl md:text-4xl text-white/90">₽</span>
              </div>
              <p className="text-sm md:text-base text-white/90 mt-2">Рассрочка и Яндекс Сплит доступны</p>
            </div>
            
            <CardContent className="p-6 md:p-10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#0EA5E9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-base md:text-lg">Доход от <span className="font-bold">100 000 до 500 000₽</span> в месяц у наших студентов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#0EA5E9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-base md:text-lg">Одна крупная сделка (<span className="font-bold">от 40 000₽ прибыли</span>) полностью покроет инвестицию</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#0EA5E9] flex-shrink-0 mt-1" size={24} />
                  <p className="text-base md:text-lg">Личный наставник + база поставщиков + AI-инструменты</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#0EA5E9]/10 p-6 md:p-8 rounded-xl border-2 border-[#F59E0B]">
                <p className="text-base md:text-lg font-bold mb-2 flex items-center gap-2">
                  <Icon name="Gift" className="text-[#F59E0B]" size={24} />
                  БОНУС ДЛЯ РЕШИВШИХ В ТЕЧЕНИЕ 24 ЧАСОВ
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Дополнительная сессия по продвижению вашего сайта 
                  (стоимостью <span className="font-bold line-through">15 000₽</span>) — <span className="font-bold text-[#0EA5E9]">БЕСПЛАТНО</span>
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full text-lg md:text-xl py-6 md:py-8 font-bold bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 shadow-2xl hover:scale-105 transition-all" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
                  <Icon name="CreditCard" className="mr-2" size={26} />
                  ОПЛАТИТЬ В РАССРОЧКУ
                </Button>
                <Button size="lg" className="w-full text-lg md:text-xl py-6 md:py-8 font-bold bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 shadow-2xl hover:scale-105 transition-all" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
                  <Icon name="CreditCard" className="mr-2" size={26} />
                  ОПЛАТИТЬ КАРТОЙ
                </Button>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="ShieldCheck" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">Безопасная сделка гарантирована</h4>
                    <p className="text-sm text-green-800">
                      Мы — официальные партнёры <span className="font-bold">Яндекс Сплит</span>. 
                      Яндекс проверяет всех партнёров перед подключением — это гарантия надёжности.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-700 pt-2 border-t border-green-200">
                  <Icon name="FileCheck" size={16} />
                  <span>ИП Кагачёв Иван Сергеевич • ИНН 510204469048</span>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                  <Icon name="Users" size={16} />
                  <span className="animate-pulse font-bold">37 человек</span> смотрят эту страницу прямо сейчас
                </p>
                <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                  <Icon name="CheckCircle" size={16} />
                  Последняя покупка <span className="font-bold">12 минут назад</span>
                </p>
              </div>
              
              <p className="text-center text-xs md:text-sm text-gray-500 pt-4">
                🔒 Безопасная оплата • <Link to="/oferta" className="underline hover:text-[#0EA5E9]">Договор оферты</Link>
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 md:mb-8">
              💡 СДЕЛАЙТЕ ВЫБОР ПРЯМО СЕЙЧАС
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-xl font-bold mb-2">❌ Вариант 1</p>
                <p className="text-sm md:text-base">Продолжить искать «бесплатный сыр», теряя время и упуская клиентов</p>
              </div>
              <div className="bg-[#0EA5E9]/20 border-2 border-[#0EA5E9] rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-xl font-bold mb-2">✅ Вариант 2</p>
                <p className="text-sm md:text-base">Инвестировать 34 999₽ и получить работающую систему за 30 дней</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm font-semibold">Частые вопросы</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Остались <span className="text-[#0EA5E9]">вопросы?</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 rounded-xl px-6 bg-gray-50">
                <AccordionTrigger className="text-base md:text-lg font-semibold hover:text-[#0EA5E9] py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#1A1F2C] to-black text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 md:mb-8">
            Готовы создать свой <span className="text-[#F59E0B]">бизнес-актив?</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-300">
            Напишите «AI ДОХОД» и получите входной билет в новую систему заработка
          </p>
          <Button size="lg" className="text-lg md:text-xl px-10 md:px-16 py-7 md:py-10 font-bold bg-[#F59E0B] hover:bg-[#F59E0B]/90 shadow-2xl hover:scale-110 transition-all animate-pulse" onClick={() => window.open('https://t.me/Ivan_936', '_blank')}>
            <Icon name="Send" className="mr-2" size={26} />
            НАЧАТЬ ПРЯМО СЕЙЧАС
          </Button>
          <div className="mt-6 space-y-2">
            <p className="text-red-400 font-bold flex items-center justify-center gap-2">
              <Icon name="Clock" size={20} />
              {spotsLeft <= 4 ? `Осталось всего ${spotsLeft} ${spotsLeft === 2 ? 'места' : 'места'}` : `Осталось ${spotsLeft} мест`} • Акция заканчивается через {timeLeft.days} {timeLeft.days === 1 ? 'день' : timeLeft.days >= 2 && timeLeft.days <= 4 ? 'дня' : 'дней'}
            </p>
          </div>
          <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
            Присоединяйтесь к тем, кто уже зарабатывает от 200 000₽ в месяц
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">🎯 AI ДОХОД</h3>
              <p className="text-sm text-gray-600">
                Система создания B2B-сайтов с использованием искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-sm text-gray-600 mb-2">Email: support@aidohod.ru</p>
              <p className="text-sm text-gray-600">Telegram: @aidohod</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <Link to="/oferta" className="block text-sm text-gray-600 mb-2 hover:text-[#0EA5E9]">Договор оферты</Link>
              <Link to="/privacy" className="block text-sm text-gray-600 hover:text-[#0EA5E9]">Политика конфиденциальности</Link>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Реквизиты</h4>
              <p className="text-sm text-gray-600 mb-1">ИП Кагачёв Иван Сергеевич</p>
              <p className="text-sm text-gray-600 mb-1">ИНН 510204469048</p>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-gray-500">
            <p>© 2025 AI ДОХОД. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;