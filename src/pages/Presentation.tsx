import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Presentation = () => {
  useEffect(() => {
    // Update meta tags for social sharing
    document.title = "Дропшиппинг 2.0: Ваш бизнес на автопилоте с помощью AI";
    
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateMetaTag('og:title', 'Дропшиппинг 2.0: Ваш бизнес на автопилоте с помощью AI');
    updateMetaTag('og:description', 'Рынок изменился. Те, кто используют AI, получают преимущество в 10 раз.');
    updateMetaTag('og:image', 'https://cdn.poehali.dev/files/edited_image_20251215213452.png');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('twitter:title', 'Дропшиппинг 2.0: Ваш бизнес на автопилоте с помощью AI');
    updateMetaTag('twitter:description', 'Рынок изменился. Те, кто используют AI, получают преимущество в 10 раз.');
    updateMetaTag('twitter:image', 'https://cdn.poehali.dev/files/edited_image_20251215213452.png');
    
    return () => {
      // Restore original meta tags when leaving the page
      document.title = "AI ДОХОД — B2B сайты";
      updateMetaTag('og:title', 'AI ДОХОД — B2B сайты');
      updateMetaTag('og:description', 'Создайте B2B-сайт с AI и выходите на сделки от 20 000₽');
      updateMetaTag('og:image', 'https://cdn.poehali.dev/files/edited_image_20251215213452.png');
      updateMetaTag('twitter:title', 'AI ДОХОД — B2B сайты');
      updateMetaTag('twitter:description', 'Создайте B2B-сайт с AI и выходите на сделки от 20 000₽');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 md:mb-8 transition-colors text-sm md:text-base"
        >
          <Icon name="ArrowLeft" size={18} />
          Назад на главную
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1A1F2C] rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl border border-white/10">
            <div className="mb-6 md:mb-8">
              <img 
                src="https://cdn.poehali.dev/files/gemini-image-2_Сделать_эту_схему_красивее_в_диджитал_стиле-0.jpg"
                alt="Схема дропшиппинга"
                className="w-full rounded-lg md:rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-4 md:space-y-6 text-white">
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent leading-tight">
                Дропшиппинг 2.0: Ваш бизнес на автопилоте с помощью AI
              </h1>

              <p className="text-sm md:text-lg leading-relaxed text-white/90">
                Рынок изменился. Те, кто используют AI, получают преимущество в 10 раз. 
                Наш продвинутый курс научит вас не просто основам, а тому, как системно 
                применять нейросети на каждом этапе для максимальной прибыли и свободного времени.
              </p>

              <p className="text-sm md:text-lg leading-relaxed text-white/90">
                Мы за честность и прозрачность. Поэтому вся информация о том, что именно вы получите, 
                четко и подробно изложена на нашем сайте.
              </p>

              <div className="bg-[#0F1419] rounded-lg md:rounded-xl p-4 md:p-6 border border-[#0EA5E9]/20">
                <p className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
                  На странице курса вы найдете:
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-white/90">Полную программу с модулями по AI</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-white/90">Данные и реквизиты, подтверждающие, что мы работаем честно</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-white/90">Ответы на все вопросы</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 md:pt-6">
                <p className="text-base md:text-xl font-semibold mb-4 md:mb-6 text-white">
                  Не откладывайте будущее на потом. Изучите все детали и примите решение:
                </p>
                <a 
                  href="https://dropshipping-advanced-course--preview.poehali.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] hover:opacity-90 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold"
                  >
                    Перейти на сайт
                    <Icon name="ExternalLink" size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;