import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Credits = () => {
  const creditTypes = [
    {
      title: 'Потребительский кредит',
      rate: 'от 7.9%',
      amount: 'до 5 млн ₽',
      term: 'до 5 лет',
      features: ['Без справок', 'Быстрое решение', 'Онлайн-оформление']
    },
    {
      title: 'Автокредит',
      rate: 'от 5.9%',
      amount: 'до 7 млн ₽',
      term: 'до 7 лет',
      features: ['Новые авто', 'С пробегом', 'Рефинансирование']
    },
    {
      title: 'Кредит под залог',
      rate: 'от 4.9%',
      amount: 'до 30 млн ₽',
      term: 'до 10 лет',
      features: ['Низкая ставка', 'Любые цели', 'Гибкие условия']
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
            <Link to="/credits" className="text-sm font-medium">Кредиты</Link>
            <Link to="/deposits" className="text-sm font-light hover:text-foreground/60 transition-colors">Вклады</Link>
            <Link to="/cards" className="text-sm font-light hover:text-foreground/60 transition-colors">Карты</Link>
            <Link to="/mortgage" className="text-sm font-light hover:text-foreground/60 transition-colors">Ипотека</Link>
            <Link to="/investments" className="text-sm font-light hover:text-foreground/60 transition-colors">Инвестиции</Link>
            <Link to="/insurance" className="text-sm font-light hover:text-foreground/60 transition-colors">Страхование</Link>
            <Link to="/contacts" className="text-sm font-light hover:text-foreground/60 transition-colors">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Кредиты</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Выгодные условия кредитования на любые цели с быстрым решением
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {creditTypes.map((credit, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{credit.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Ставка</span>
                        <span className="font-medium">{credit.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Сумма</span>
                        <span className="font-medium">{credit.amount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Срок</span>
                        <span className="font-medium">{credit.term}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {credit.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-foreground" strokeWidth={2} />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-sm font-light">
                    Оформить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-light tracking-tight">Нужна консультация?</h2>
          <p className="text-base text-muted-foreground font-light">
            Наши специалисты помогут подобрать оптимальные условия
          </p>
          <Button size="lg" className="rounded-sm font-light px-12 py-6">
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Credits;
