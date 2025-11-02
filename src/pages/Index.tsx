import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [loanTerm, setLoanTerm] = useState([12]);
  
  const monthlyPayment = (loanAmount[0] * (0.15 / 12) * Math.pow(1 + 0.15 / 12, loanTerm[0])) / (Math.pow(1 + 0.15 / 12, loanTerm[0]) - 1);

  const services = [
    {
      icon: 'CreditCard',
      title: 'Дебетовые карты',
      description: 'Современные карты с кэшбэком до 10% и бесплатным обслуживанием',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'PiggyBank',
      title: 'Вклады',
      description: 'До 18% годовых на срочные депозиты с гибкими условиями',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Кредиты',
      description: 'Моментальное одобрение кредитов от 7.9% годовых',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Smartphone',
      title: 'Онлайн-банк',
      description: 'Управляйте финансами в мобильном приложении 24/7',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    { icon: 'Shield', text: 'Защита вкладов' },
    { icon: 'Zap', text: 'Мгновенные переводы' },
    { icon: 'Clock', text: 'Круглосуточная поддержка' },
    { icon: 'Lock', text: 'Безопасность данных' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Landmark" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinBank
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent leading-tight">
              Банк нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современные финансовые решения для вашего бизнеса и личных целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 transition-all hover:scale-105">
                <Icon name="Rocket" className="mr-2" size={20} />
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:border-primary transition-all hover:scale-105">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-none overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
                Калькулятор кредита
              </CardTitle>
              <CardDescription className="text-lg">
                Рассчитайте ежемесячный платёж за несколько секунд
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-semibold">Сумма кредита</label>
                  <span className="text-2xl font-bold text-primary">
                    {loanAmount[0].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  min={100000}
                  max={5000000}
                  step={50000}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-semibold">Срок кредита</label>
                  <span className="text-2xl font-bold text-secondary">
                    {loanTerm[0]} {loanTerm[0] === 1 ? 'месяц' : loanTerm[0] < 5 ? 'месяца' : 'месяцев'}
                  </span>
                </div>
                <Slider
                  value={loanTerm}
                  onValueChange={setLoanTerm}
                  min={3}
                  max={60}
                  step={3}
                  className="cursor-pointer"
                />
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center mt-8">
                <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                </p>
                <p className="text-sm text-muted-foreground mt-4">Ставка 15% годовых</p>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 mt-4">
                <Icon name="Send" className="mr-2" size={20} />
                Оформить кредит
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon as any} className="text-white" size={32} />
                </div>
                <p className="text-lg font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Landmark" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">FinBank</span>
              </div>
              <p className="text-gray-400">Банк нового поколения</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Карты</li>
                <li>Вклады</li>
                <li>Кредиты</li>
                <li>Инвестиции</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Карьера</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>8 800 555-35-35</li>
                <li>support@finbank.ru</li>
                <li>Чат 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 FinBank. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
