import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const benefits = [
    {
      icon: "TrendingUp",
      title: "От 0 до первых продаж за 2 недели",
      description: "Пошаговая система запуска, проверенная на 500+ учениках"
    },
    {
      icon: "Globe",
      title: "Создание и продвижение сайтов",
      description: "Научитесь создавать продающие лендинги и привлекать клиентов"
    },
    {
      icon: "Zap",
      title: "Автоматизация бизнеса",
      description: "Готовые скрипты и инструменты для масштабирования"
    },
    {
      icon: "Shield",
      title: "Работа без вложений",
      description: "Запустите бизнес с нулевым стартовым капиталом"
    },
    {
      icon: "Target",
      title: "Поиск трендовых товаров",
      description: "Эксклюзивные методики выбора прибыльных ниш"
    },
    {
      icon: "Users",
      title: "Поддержка 24/7",
      description: "Закрытое комьюнити и личные консультации"
    }
  ];

  const modules = [
    {
      title: "Модуль 1: Основы дропшиппинга",
      lessons: "12 уроков",
      duration: "3 часа",
      topics: ["Что такое дропшиппинг", "Выбор платформы", "Регистрация и настройка", "Юридические аспекты"]
    },
    {
      title: "Модуль 2: Поиск прибыльных товаров",
      lessons: "15 уроков",
      duration: "4 часа",
      topics: ["Анализ трендов на Авито", "Работа с поставщиками", "Ценообразование", "Конкурентный анализ"]
    },
    {
      title: "Модуль 3: Создание сайтов",
      lessons: "20 уроков",
      duration: "6 часов",
      topics: ["Конструкторы сайтов", "Дизайн лендингов", "Копирайтинг", "Мобильная адаптация"]
    },
    {
      title: "Модуль 4: Продвижение и реклама",
      lessons: "18 уроков",
      duration: "5 часов",
      topics: ["SEO-оптимизация", "Таргетированная реклама", "Контент-маркетинг", "Email-рассылки"]
    },
    {
      title: "Модуль 5: Масштабирование",
      lessons: "10 уроков",
      duration: "3 часа",
      topics: ["Автоматизация процессов", "Найм команды", "Финансовый учет", "Выход на новые рынки"]
    }
  ];

  const cases = [
    {
      name: "Алексей, 28 лет",
      result: "От 0 до 300 000₽/мес за 3 месяца",
      story: "Запустил магазин аксессуаров для телефонов на Авито. Первая продажа через 5 дней обучения.",
      image: "👨‍💼"
    },
    {
      name: "Марина, 34 года",
      result: "Создала 5 прибыльных сайтов",
      story: "Бывший офисный работник. Теперь зарабатываю на создании сайтов для дропшипперов 150 000₽/мес.",
      image: "👩‍💻"
    },
    {
      name: "Игорь, 22 года",
      result: "500 000₽ за первые 6 месяцев",
      story: "Студент, начал с нуля. Сейчас управляю 3 магазинами и командой из 4 человек.",
      image: "🎓"
    }
  ];

  const reviews = [
    {
      name: "Дмитрий К.",
      rating: 5,
      text: "Лучший курс по дропшиппингу на русском! Всё понятно объяснено, без воды. За месяц вышел на стабильные 80к."
    },
    {
      name: "Елена М.",
      rating: 5,
      text: "Спасибо за модуль по созданию сайтов! Теперь делаю лендинги на заказ и это приносит больше, чем дропшиппинг."
    },
    {
      name: "Андрей Л.",
      rating: 5,
      text: "Отличная поддержка в чате. На все вопросы отвечают в течение часа. Реально работающие схемы!"
    }
  ];

  const faq = [
    {
      q: "Нужны ли вложения для старта?",
      a: "Нет, курс включает методики работы без стартового капитала. Вы можете начать с бесплатных площадок вроде Авито."
    },
    {
      q: "Сколько времени нужно уделять?",
      a: "Минимум 2-3 часа в день для изучения и применения материала. Первые результаты появляются через 1-2 недели."
    },
    {
      q: "Подойдет ли курс новичкам?",
      a: "Да! Курс создан специально для людей без опыта в e-commerce и программировании. Всё объясняется с нуля."
    },
    {
      q: "Есть ли поддержка после покупки?",
      a: "Да, вы получаете доступ в закрытый чат с экспертами и другими учениками. Поддержка работает 24/7."
    },
    {
      q: "Что если курс не подойдет?",
      a: "Мы даем гарантию возврата денег в течение 14 дней, если вы не удовлетворены качеством материала."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">💎 Дропшиппинг PRO</h1>
          <Button size="lg" className="font-semibold">Начать обучение</Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-sm font-semibold">Продвинутый уровень</Badge>
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Зарабатывай от <span className="text-primary">300 000₽</span> в месяц на дропшиппинге
              </h2>
              <p className="text-xl text-muted-foreground">
                Полный курс по дропшиппингу + создание и продвижение сайтов. Научим зарабатывать без вложений и опыта.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-6 font-semibold">
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Программа курса
                </Button>
              </div>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Успешных учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">75</div>
                  <div className="text-sm text-muted-foreground">Уроков</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">21 час</div>
                  <div className="text-sm text-muted-foreground">Видеоконтента</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center text-white">
                <div className="text-center space-y-4 p-8">
                  <div className="text-8xl">💰</div>
                  <div className="text-2xl font-heading font-bold">Дропшиппинг PRO</div>
                  <div className="text-lg opacity-90">Мастер e-commerce</div>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={20} />
                      <span>Создание сайтов</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={20} />
                      <span>Продвижение</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={20} />
                      <span>Масштабирование</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему это лучший выбор?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полная система заработка от поиска товаров до автоматизации продаж
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground">
              5 модулей от базовых знаний до масштабирования бизнеса
            </p>
          </div>
          <div className="grid gap-6">
            {modules.map((module, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-2xl mb-2">{module.title}</CardTitle>
                      <CardDescription className="flex gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          {module.lessons}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {module.duration}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      Модуль {idx + 1}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIdx) => (
                      <Badge key={topicIdx} variant="outline" className="text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Истории успеха наших учеников
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные результаты реальных людей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{caseItem.image}</div>
                  <CardTitle className="font-heading text-center">{caseItem.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-primary font-bold text-lg">{caseItem.result}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{caseItem.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Отзывы студентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Что говорят наши ученики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-lg font-heading hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Готов начать зарабатывать?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Оставь заявку и получи бесплатную консультацию
            </p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем опыте и целях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6 font-semibold bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">💎 Дропшиппинг PRO</h3>
              <p className="opacity-80">
                Полный курс по заработку на дропшиппинге, созданию и продвижению сайтов
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p>Email: info@dropshipping-pro.ru</p>
                <p>Telegram: @dropshipping_pro</p>
                <p>WhatsApp: +7 (999) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Полезное</h4>
              <div className="space-y-2 opacity-80">
                <p>Блог с кейсами</p>
                <p>Бесплатные материалы</p>
                <p>Отзывы учеников</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center opacity-80">
            <p>© 2024 Дропшиппинг PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
