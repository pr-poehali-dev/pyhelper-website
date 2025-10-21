import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: "Code2",
      title: "Умные подсказки",
      description: "Контекстная помощь по синтаксису Python в режиме реального времени"
    },
    {
      icon: "BookOpen",
      title: "Документация",
      description: "Быстрый доступ к официальной документации Python и популярных библиотек"
    },
    {
      icon: "Zap",
      title: "Оптимизация",
      description: "Анализ кода и рекомендации по улучшению производительности"
    },
    {
      icon: "Bug",
      title: "Отладка",
      description: "Помощь в поиске и исправлении ошибок с подробными объяснениями"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3776AB] to-[#FFD43B] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🐍</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3776AB] to-[#FFD43B] bg-clip-text text-transparent">
                PyHelper
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-foreground transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('features')} className="text-foreground/80 hover:text-foreground transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('download')} className="text-foreground/80 hover:text-foreground transition-colors">
                Скачать
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('download')}
              className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-opacity"
            >
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Ваш персональный
                <span className="block bg-gradient-to-r from-[#3776AB] to-[#FFD43B] bg-clip-text text-transparent">
                  Python помощник
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Учитесь, разрабатывайте и совершенствуйте навыки программирования на Python с помощью интеллектуального ассистента
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('download')}
                  className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-opacity text-lg px-8"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать бесплатно
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('features')}
                  className="text-lg px-8"
                >
                  Узнать больше
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-green-500" />
                  Windows, macOS, Linux
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-green-500" />
                  Бесплатно навсегда
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3776AB]/20 to-[#FFD43B]/20 rounded-3xl blur-3xl animate-glow"></div>
              <Card className="relative glass-effect p-8 space-y-4 animate-float">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3776AB]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Terminal" size={18} className="text-[#3776AB]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">Вопрос:</div>
                    <div className="text-foreground">Как нарисовать красный круг?</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFD43B]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="BookOpen" size={18} className="text-[#FFD43B]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">Справочник:</div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      from graph import *<br/>
                      canvasSize(100, 100)<br/>
                      penColor("red")<br/>
                      brushColor("red")<br/>
                      circle(50, 50, 50)<br/>
                      run()
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Возможности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все инструменты для эффективной работы с Python в одном приложении
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="glass-effect p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3776AB] to-[#FFD43B] flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-effect p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Скачать PyHelper
              </h2>
              <p className="text-xl text-muted-foreground">
                Начните работу с вашим персональным помощником по Python прямо сейчас
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-opacity text-lg px-12 py-6"
                onClick={() => window.open('https://drive.google.com/file/d/1mKRZtPSDBApVSjJcXNwTcCiBggFOsDab/view?usp=drive_link', '_blank')}
              >
                <Icon name="Download" className="mr-2" size={24} />
                Скачать инсталятор
              </Button>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Версия 1.0.0 • Размер: ~50 МБ • Последнее обновление: 2025</p>
            </div>
            

          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3776AB] to-[#FFD43B] rounded-xl flex items-center justify-center">
                <span className="text-lg">🐍</span>
              </div>
              <span className="font-semibold">PyHelper</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 PyHelper. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;