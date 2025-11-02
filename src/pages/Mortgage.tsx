import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Mortgage = () => {
  const programs = [
    {
      title: 'Семейная ипотека',
      rate: 'от 6%',
      payment: 'от 15%',
      term: 'до 30 лет',
      features: ['Для семей с детьми', 'Господдержка', 'Сниженная ставка']
    },
    {
      title: 'Новостройка',
      rate: 'от 7%',
      payment: 'от 10%',
      term: 'до 30 лет',
      features: ['Аккредитованные ЖК', 'Страхование жизни', 'Быстрое оформление']
    },
    {
      title: 'Вторичка',
      rate: 'от 8.5%',
      payment: 'от 20%',
      term: 'до 25 лет',
      features: ['Любая недвижимость', 'Онлайн-оценка', 'Гибкие условия']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <Icon name="Landmark" className="text-background" size={18} />
            </div>
            <span className="text-xl font-medium tracking-tight">FinBank</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-sm font-light hover:text-foreground/60 transition-colors">Главная</Link>
            <Link to="/credits" className="text-sm font-light hover:text-foreground/60 transition-colors">Кредиты</Link>
            <Link to="/deposits" className="text-sm font-light hover:text-foreground/60 transition-colors">Вклады</Link>
            <Link to="/cards" className="text-sm font-light hover:text-foreground/60 transition-colors">Карты</Link>
            <Link to="/mortgage" className="text-sm font-medium">Ипотека</Link>
            <Link to="/investments" className="text-sm font-light hover:text-foreground/60 transition-colors">Инвестиции</Link>
            <Link to="/insurance" className="text-sm font-light hover:text-foreground/60 transition-colors">Страхование</Link>
            <Link to="/contacts" className="text-sm font-light hover:text-foreground/60 transition-colors">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Ипотека</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Доступная ипотека на покупку жилья с минимальными ставками и гибкими условиями
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{program.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Ставка</span>
                        <span className="font-medium">{program.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Первый взнос</span>
                        <span className="font-medium">{program.payment}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Срок</span>
                        <span className="font-medium">{program.term}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-foreground" strokeWidth={2} />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-sm font-light">
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-light tracking-tight text-center mb-16">Этапы оформления</h2>
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mx-auto">
                <span className="text-lg font-medium">1</span>
              </div>
              <h3 className="text-base font-normal">Заявка онлайн</h3>
              <p className="text-sm text-muted-foreground font-light">Заполните форму за 5 минут</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mx-auto">
                <span className="text-lg font-medium">2</span>
              </div>
              <h3 className="text-base font-normal">Одобрение</h3>
              <p className="text-sm text-muted-foreground font-light">Решение в течение часа</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mx-auto">
                <span className="text-lg font-medium">3</span>
              </div>
              <h3 className="text-base font-normal">Выбор жилья</h3>
              <p className="text-sm text-muted-foreground font-light">Помощь в подборе объекта</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center mx-auto">
                <span className="text-lg font-medium">4</span>
              </div>
              <h3 className="text-base font-normal">Сделка</h3>
              <p className="text-sm text-muted-foreground font-light">Оформление и выдача средств</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mortgage;
