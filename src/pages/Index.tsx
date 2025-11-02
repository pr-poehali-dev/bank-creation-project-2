import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [loanTerm, setLoanTerm] = useState([12]);
  
  const monthlyPayment = (loanAmount[0] * (0.15 / 12) * Math.pow(1 + 0.15 / 12, loanTerm[0])) / (Math.pow(1 + 0.15 / 12, loanTerm[0]) - 1);

  const services = [
    {
      icon: 'CreditCard',
      title: 'Дебетовые карты',
      description: 'Современные карты с кэшбэком до 10% и бесплатным обслуживанием'
    },
    {
      icon: 'PiggyBank',
      title: 'Вклады',
      description: 'До 18% годовых на срочные депозиты с гибкими условиями'
    },
    {
      icon: 'TrendingUp',
      title: 'Кредиты',
      description: 'Моментальное одобрение кредитов от 7.9% годовых'
    },
    {
      icon: 'Smartphone',
      title: 'Онлайн-банк',
      description: 'Управляйте финансами в мобильном приложении 24/7'
    }
  ];

  const benefits = [
    { icon: 'Shield', text: 'Защита вкладов' },
    { icon: 'Zap', text: 'Мгновенные переводы' },
    { icon: 'Clock', text: 'Круглосуточная поддержка' },
    { icon: 'Lock', text: 'Безопасность данных' }
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
            <Link to="/" className="text-sm font-medium">Главная</Link>
            <Link to="/credits" className="text-sm font-light hover:text-foreground/60 transition-colors">Кредиты</Link>
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
              Банк нового<br />поколения
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Современные финансовые решения для вашего бизнеса и личных целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="rounded-sm font-light px-12 py-6 text-base">
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="rounded-sm font-light px-12 py-6 text-base">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 tracking-tight">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="space-y-6 group"
              >
                <Icon name={service.icon as any} className="text-foreground" size={32} strokeWidth={1} />
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal tracking-tight">{service.title}</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Калькулятор кредита
            </h2>
            <p className="text-base text-muted-foreground font-light">
              Рассчитайте ежемесячный платёж за несколько секунд
            </p>
          </div>
          
          <Card className="border rounded-sm p-12">
            <CardContent className="space-y-16 p-0">
              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-light text-muted-foreground">Сумма кредита</label>
                  <span className="text-3xl font-light tracking-tight">
                    {loanAmount[0].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  min={100000}
                  max={5000000}
                  step={50000}
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-light text-muted-foreground">Срок кредита</label>
                  <span className="text-3xl font-light tracking-tight">
                    {loanTerm[0]} {loanTerm[0] === 1 ? 'месяц' : loanTerm[0] < 5 ? 'месяца' : 'месяцев'}
                  </span>
                </div>
                <Slider
                  value={loanTerm}
                  onValueChange={setLoanTerm}
                  min={3}
                  max={60}
                  step={3}
                />
              </div>

              <div className="border-t pt-16 text-center space-y-4">
                <p className="text-xs font-light text-muted-foreground tracking-wider uppercase">Ежемесячный платёж</p>
                <p className="text-6xl font-light tracking-tight">
                  {monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                </p>
                <p className="text-sm font-light text-muted-foreground">Ставка 15% годовых</p>
              </div>

              <Button className="w-full rounded-sm font-light text-base py-6">
                Оформить кредит
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="benefits" className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 tracking-tight">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-6"
              >
                <Icon name={benefit.icon as any} className="text-foreground" size={32} strokeWidth={1} />
                <p className="text-base font-light">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-background rounded-sm flex items-center justify-center">
                  <Icon name="Landmark" className="text-foreground" size={18} />
                </div>
                <span className="text-xl font-medium">FinBank</span>
              </div>
              <p className="text-background/60 font-light text-sm">Банк нового поколения</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium mb-6 text-sm">Услуги</h3>
              <ul className="space-y-3 text-background/60 font-light text-sm">
                <li>Карты</li>
                <li>Вклады</li>
                <li>Кредиты</li>
                <li>Инвестиции</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium mb-6 text-sm">Компания</h3>
              <ul className="space-y-3 text-background/60 font-light text-sm">
                <li>О нас</li>
                <li>Карьера</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium mb-6 text-sm">Поддержка</h3>
              <ul className="space-y-3 text-background/60 font-light text-sm">
                <li>8 800 555-35-35</li>
                <li>support@finbank.ru</li>
                <li>Чат 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm font-light">
            <p>© 2024 FinBank</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;