import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Cards = () => {
  const cards = [
    {
      title: 'Классическая',
      cashback: 'до 5%',
      service: 'Бесплатно',
      features: ['Кэшбэк на всё', 'Снятие без комиссии', 'Apple Pay / Google Pay']
    },
    {
      title: 'Премиум',
      cashback: 'до 10%',
      service: '990 ₽/мес',
      features: ['Повышенный кэшбэк', 'VIP-обслуживание', 'Доступ в бизнес-залы']
    },
    {
      title: 'Молодёжная',
      cashback: 'до 15%',
      service: 'Бесплатно',
      features: ['Максимальный кэшбэк', 'Для студентов', 'Акции и скидки']
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
            <Link to="/cards" className="text-sm font-medium">Карты</Link>
            <Link to="/mortgage" className="text-sm font-light hover:text-foreground/60 transition-colors">Ипотека</Link>
            <Link to="/investments" className="text-sm font-light hover:text-foreground/60 transition-colors">Инвестиции</Link>
            <Link to="/insurance" className="text-sm font-light hover:text-foreground/60 transition-colors">Страхование</Link>
            <Link to="/contacts" className="text-sm font-light hover:text-foreground/60 transition-colors">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Карты</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Дебетовые карты с высоким кэшбэком и удобным управлением через приложение
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{card.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Кэшбэк</span>
                        <span className="font-medium">{card.cashback}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Обслуживание</span>
                        <span className="font-medium">{card.service}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-foreground" strokeWidth={2} />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-sm font-light">
                    Заказать карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-light tracking-tight">Преимущества наших карт</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <Icon name="Smartphone" size={32} strokeWidth={1} className="mx-auto" />
                <h3 className="text-lg font-normal">Мобильный банк</h3>
                <p className="text-sm text-muted-foreground font-light">Полный контроль через приложение</p>
              </div>
              <div className="space-y-4">
                <Icon name="Lock" size={32} strokeWidth={1} className="mx-auto" />
                <h3 className="text-lg font-normal">Безопасность</h3>
                <p className="text-sm text-muted-foreground font-light">3D Secure и Push-уведомления</p>
              </div>
              <div className="space-y-4">
                <Icon name="Zap" size={32} strokeWidth={1} className="mx-auto" />
                <h3 className="text-lg font-normal">Мгновенные переводы</h3>
                <p className="text-sm text-muted-foreground font-light">Переводы 24/7 без комиссии</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
