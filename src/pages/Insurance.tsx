import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const insuranceTypes = [
    {
      title: 'ОСАГО и КАСКО',
      price: 'от 3 500 ₽/год',
      features: ['Онлайн-оформление', 'Выплаты без справок', 'Круглосуточная поддержка']
    },
    {
      title: 'Страхование жизни',
      price: 'от 5 000 ₽/год',
      features: ['Защита семьи', 'Накопительная программа', 'Налоговый вычет']
    },
    {
      title: 'Страхование имущества',
      price: 'от 2 500 ₽/год',
      features: ['Квартира и дом', 'От всех рисков', 'Быстрые выплаты']
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
            <Link to="/mortgage" className="text-sm font-light hover:text-foreground/60 transition-colors">Ипотека</Link>
            <Link to="/investments" className="text-sm font-light hover:text-foreground/60 transition-colors">Инвестиции</Link>
            <Link to="/insurance" className="text-sm font-medium">Страхование</Link>
            <Link to="/contacts" className="text-sm font-light hover:text-foreground/60 transition-colors">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Страхование</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Надёжная защита вас, вашей семьи и имущества от непредвиденных ситуаций
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{insurance.title}</h3>
                    <div className="text-sm">
                      <span className="text-muted-foreground font-light">Стоимость </span>
                      <span className="font-medium">{insurance.price}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {insurance.features.map((feature, i) => (
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
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-light tracking-tight text-center mb-16">Почему мы</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <Icon name="Clock" size={32} strokeWidth={1} className="mx-auto" />
              <h3 className="text-lg font-normal">Быстрое оформление</h3>
              <p className="text-sm text-muted-foreground font-light">Полис за 10 минут онлайн</p>
            </div>
            <div className="text-center space-y-4">
              <Icon name="Shield" size={32} strokeWidth={1} className="mx-auto" />
              <h3 className="text-lg font-normal">Надёжность</h3>
              <p className="text-sm text-muted-foreground font-light">Лицензированные программы</p>
            </div>
            <div className="text-center space-y-4">
              <Icon name="Headphones" size={32} strokeWidth={1} className="mx-auto" />
              <h3 className="text-lg font-normal">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground font-light">Помощь в любое время</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
