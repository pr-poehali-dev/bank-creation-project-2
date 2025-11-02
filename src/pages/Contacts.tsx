import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Contacts = () => {
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
            <Link to="/insurance" className="text-sm font-light hover:text-foreground/60 transition-colors">Страхование</Link>
            <Link to="/contacts" className="text-sm font-medium">Контакты</Link>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">Контакты</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом. Мы всегда готовы помочь
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} strokeWidth={1} className="mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal">Телефон</h3>
                    <p className="text-base text-muted-foreground font-light">8 800 555-35-35</p>
                    <p className="text-sm text-muted-foreground font-light">Бесплатно по России, 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} strokeWidth={1} className="mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal">Email</h3>
                    <p className="text-base text-muted-foreground font-light">support@finbank.ru</p>
                    <p className="text-sm text-muted-foreground font-light">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} strokeWidth={1} className="mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal">Головной офис</h3>
                    <p className="text-base text-muted-foreground font-light">г. Москва, ул. Тверская, д. 1</p>
                    <p className="text-sm text-muted-foreground font-light">Пн-Пт: 9:00 - 19:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" size={24} strokeWidth={1} className="mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal">Онлайн-чат</h3>
                    <p className="text-base text-muted-foreground font-light">В мобильном приложении</p>
                    <p className="text-sm text-muted-foreground font-light">Круглосуточная поддержка</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border rounded-sm p-8">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-light text-muted-foreground">Ваше имя</label>
                    <Input className="rounded-sm" placeholder="Иван Иванов" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-light text-muted-foreground">Email</label>
                    <Input className="rounded-sm" type="email" placeholder="ivan@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-light text-muted-foreground">Телефон</label>
                    <Input className="rounded-sm" type="tel" placeholder="+7 (900) 000-00-00" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-light text-muted-foreground">Сообщение</label>
                    <Textarea className="rounded-sm min-h-32" placeholder="Опишите ваш вопрос..." />
                  </div>

                  <Button className="w-full rounded-sm font-light py-6">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-light tracking-tight">Найдите ближайший офис</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border rounded-sm p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-lg font-normal">Москва, Центр</h3>
                  <p className="text-sm text-muted-foreground font-light">ул. Тверская, д. 1</p>
                  <p className="text-sm text-muted-foreground font-light">Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-16:00</p>
                </CardContent>
              </Card>
              
              <Card className="border rounded-sm p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-lg font-normal">Санкт-Петербург</h3>
                  <p className="text-sm text-muted-foreground font-light">Невский пр., д. 50</p>
                  <p className="text-sm text-muted-foreground font-light">Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-16:00</p>
                </CardContent>
              </Card>

              <Card className="border rounded-sm p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-lg font-normal">Екатеринбург</h3>
                  <p className="text-sm text-muted-foreground font-light">ул. Ленина, д. 25</p>
                  <p className="text-sm text-muted-foreground font-light">Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-16:00</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
