import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [secretKeys, setSecretKeys] = useState<string[]>([]);
  const [showSecretButton, setShowSecretButton] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const newKeys = [...secretKeys, key].slice(-6);
      setSecretKeys(newKeys);
      
      if (newKeys.join('') === 'SECRET') {
        setShowSecretButton(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [secretKeys]);

  const activateSecretMode = () => {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1', '_blank');
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
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="https://cdn.poehali.dev/files/ba6aefdf-35b9-413a-8a9c-696d4b9cb27a.png" 
                alt="PyHelper" 
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#3776AB] to-[#FFD43B] bg-clip-text text-transparent">
                PyHelper
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95">
                Главная
              </button>
              <button onClick={() => scrollToSection('features')} className="text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95">
                Возможности
              </button>
              <button onClick={() => scrollToSection('download')} className="text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95">
                Скачать
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('download')}
              className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base px-3 sm:px-4"
              size="sm"
            >
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
                Ваш персональный
                <span className="block bg-gradient-to-r from-[#3776AB] to-[#FFD43B] bg-clip-text text-transparent">
                  Python помощник
                </span>
              </h1>
              
              <p className="text-base sm:text-xl text-muted-foreground">
                Учитесь, разрабатывайте и совершенствуйте навыки программирования на Python с помощью интеллектуального ассистента
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('download')}
                  className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать бесплатно
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('features')}
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  Узнать больше
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-green-500" />
                  Бесплатно навсегда
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3776AB]/20 to-[#FFD43B]/20 rounded-3xl blur-3xl animate-glow"></div>
              <Card className="relative glass-effect p-4 sm:p-8 space-y-4 animate-float">
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

      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Возможности
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Все инструменты для эффективной работы с Python в одном приложении
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
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
          
          {showSecretButton && (
            <div className="flex justify-center mt-8 animate-fade-in">
              <Card 
                className="glass-effect p-6 hover:scale-105 transition-transform duration-300 cursor-pointer max-w-md w-full"
                onClick={activateSecretMode}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Eye" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Secret button</h3>
                <p className="text-muted-foreground text-center">You found it!</p>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section id="download" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-effect p-6 sm:p-12 text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Скачать PyHelper
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground">
                Начните работу с вашим персональным помощником по Python прямо сейчас
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#3776AB] to-[#4B8BBE] hover:opacity-90 transition-opacity text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1zlBsXNYQNrcGY8DLusS57bgh48QkkxRx/view?usp=drive_link', '_blank')}
              >
                <Icon name="Download" className="mr-2" size={24} />
                Скачать приложение
              </Button>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Версия 1.1 • Размер: 23,5 МБ • Последнее обновление: Ноябрь 2025</p>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-4">История версий</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Версия 1.1 <span className="text-muted-foreground font-normal">• Ноябрь 2025</span></p>
                      <p className="text-sm text-muted-foreground">Исправлен баг с нерабочим справочником</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Версия 1.0 Release <span className="text-muted-foreground font-normal">• Октябрь 2025</span></p>
                      <p className="text-sm text-muted-foreground">Полноценный выход приложения</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-xs text-muted-foreground text-center md:text-left">
              Данный сайт был разработан для индивидуального проекта PyHelper, созданного TimohaGeimer. Все права защищены 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;