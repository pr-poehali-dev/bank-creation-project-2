import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Investments = () => {
  const products = [
    {
      title: 'Брокерский счёт',
      income: 'от 15% годовых',
      risk: 'Средний',
      features: ['Акции и облигации', 'Без комиссии за ведение', 'Доступ к биржам']
    },
    {
      title: 'ИИС',
      income: 'до 52 000 ₽ вычет',
      risk: 'Низкий',
      features: ['Налоговый вычет', 'Долгосрочные инвестиции', 'Поддержка от банка']
    },
    {
      title: 'ПИФы',
      income: 'от 20% годовых',
      risk: 'Высокий',
      features: ['Профессиональное управление', 'Диверсификация', 'Высокая доходность']
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
            <Link to="/investments" className="text-sm font-medium">Инвестиции</Link>
            <Link to="/insurance" className="text-sm font-light hover:text-foreground/60 transition-colors">Страхование</Link>
            <Link to="/contacts" className="text-sm font-light hover:text-foreground/60 transition-colors">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Инвестиции</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Увеличивайте капитал с помощью современных инвестиционных инструментов
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border rounded-sm p-8">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-normal tracking-tight">{product.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Доходность</span>
                        <span className="font-medium">{product.income}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">Риск</span>
                        <span className="font-medium">{product.risk}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-foreground" strokeWidth={2} />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-sm font-light">
                    Открыть счёт
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
              <Icon name="TrendingUp" size={32} strokeWidth={1} />
              <h3 className="text-3xl font-light tracking-tight">Рост капитала</h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Профессиональные инструменты анализа и широкий выбор активов для формирования оптимального портфеля
              </p>
            </div>
            <div className="space-y-6">
              <Icon name="UserCheck" size={32} strokeWidth={1} />
              <h3 className="text-3xl font-light tracking-tight">Поддержка экспертов</h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Персональный менеджер и консультации от опытных инвестиционных аналитиков
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;
