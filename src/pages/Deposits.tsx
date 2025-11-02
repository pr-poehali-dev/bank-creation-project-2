import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Deposits = () => {
  const deposits = [
    {
      title: 'Накопительный',
      rate: 'до 18%',
      term: 'от 1 месяца',
      min: '10 000 ₽',
      features: ['Пополнение', 'Частичное снятие', 'Ежемесячная выплата']
    },
    {
      title: 'Срочный',
      rate: 'до 20%',
      term: 'от 3 месяцев',
      min: '50 000 ₽',
      features: ['Максимальный доход', 'Фиксированная ставка', 'Капитализация']
    },
    {
      title: 'Пенсионный',
      rate: 'до 19%',
      term: 'от 6 месяцев',
      min: '5 000 ₽',
      features: ['Повышенная ставка', 'Гибкие условия', 'Льготные тарифы']
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
            <Link to="/deposits" className="text-sm font-medium">Вклады</Link>
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
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Вклады</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Надёжное сохранение и приумножение ваших средств с высокими процентными ставками
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {deposits.map((deposit, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{deposit.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Ставка</span>
                        <span className="font-medium">{deposit.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Срок</span>
                        <span className="font-medium">{deposit.term}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Минимум</span>
                        <span className="font-medium">{deposit.min}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {deposit.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-foreground" strokeWidth={2} />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-sm font-light">
                    Открыть вклад
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <Icon name="Shield" size={32} strokeWidth={1} />
              <h3 className="text-3xl font-light tracking-tight">Защита вкладов</h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Все вклады застрахованы государством на сумму до 1.4 млн рублей в рамках системы страхования вкладов
              </p>
            </div>
            <div className="space-y-6">
              <Icon name="TrendingUp" size={32} strokeWidth={1} />
              <h3 className="text-3xl font-light tracking-tight">Высокий доход</h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Конкурентные процентные ставки и возможность капитализации процентов для максимального дохода
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deposits;
