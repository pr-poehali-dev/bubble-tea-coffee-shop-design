import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const menuItems = [
  { name: "Классический молочный чай", price: "280₽", description: "Традиционный тайваньский молочный чай с жемчужными пузырьками", category: "Молочные" },
  { name: "Матча латте", price: "320₽", description: "Японский зелёный чай матча с молоком и тапиокой", category: "Зелёные" },
  { name: "Тайский чай", price: "300₽", description: "Ароматный чай со специями и кокосовым молоком", category: "Фруктовые" },
  { name: "Лавандовый улун", price: "340₽", description: "Изысканный улун с лавандой и медовыми пузырьками", category: "Премиум" },
  { name: "Манго-маракуйя", price: "290₽", description: "Освежающий фруктовый микс с тропическими нотками", category: "Фруктовые" },
  { name: "Чёрный сезам", price: "310₽", description: "Необычный вкус чёрного кунжута с молочной основой", category: "Молочные" }
];

const reviews = [
  { name: "Анна К.", text: "Лучший бабл ти в городе! Особенно люблю матча латте 🍵", rating: 5 },
  { name: "Дмитрий М.", text: "Аутентичная атмосfera и невероятно вкусные напитки. Рекомендую!", rating: 5 },
  { name: "Елена В.", text: "Отличное место для встреч с друзьями. Персонал очень дружелюбный", rating: 5 }
];

const promotions = [
  { title: "Счастливые часы", description: "Скидка 20% на все напитки с 14:00 до 16:00", badge: "Ежедневно" },
  { title: "Второй в подарок", description: "При покупке двух напитков - третий бесплатно", badge: "Выходные" },
  { title: "Студентам", description: "Скидка 15% при предъявлении студенческого", badge: "Постоянно" }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">茶</span>
            </div>
            <h1 className="text-xl font-bold text-slate-800">Bubble Tea House</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#menu" className="text-slate-600 hover:text-primary transition-colors">Меню</a>
            <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-slate-600 hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-slate-600 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="ShoppingBag" size={16} />
            Заказать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">茶</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Аутентичный<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Bubble Tea
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Погрузитесь в мир традиционных азиатских вкусов. Свежие ингредиенты, 
              аутентичные рецепты и атмосфера Востока в каждом глотке.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                <Icon name="Coffee" size={20} />
                Посмотреть меню
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                <Icon name="MapPin" size={20} />
                Найти нас
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-slate-500">Видов чая</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5★</div>
                <div className="text-sm text-slate-500">Рейтинг</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">2k+</div>
                <div className="text-sm text-slate-500">Довольных гостей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наше меню</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Каждый напиток готовится вручную из отборных ингредиентов по традиционным рецептам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {item.category}
                  </Badge>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Coffee" size={20} className="text-secondary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                    <Icon name="Plus" size={16} />
                    Добавить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">О нас</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Bubble Tea House — это место, где встречаются традиции Востока и современность. 
                  Мы начинали как небольшая семейная чайная, вдохновлённая путешествиями по Тайваню и Японии.
                </p>
                <p>
                  Наша философия проста: каждый напиток должен рассказывать историю. 
                  Мы используем только натуральные ингредиенты и традиционные методы заваривания, 
                  чтобы подарить вам подлинный вкус Азии.
                </p>
                <p>
                  От классических молочных чаёв до авторских миксов с экзотическими фруктами — 
                  каждый найдёт свой идеальный вкус в нашем уютном пространстве.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-slate-500">Год основания</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-slate-500">Филиала</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-slate-500">Сотрудников</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-white text-4xl font-bold">茶</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Традиция & Качество</h3>
                  <p className="text-slate-600">Аутентичные рецепты с Дальнего Востока</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Атмосфера</h2>
            <p className="text-slate-600">Погрузитесь в уютный мир восточной чайной культуры</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="img/10b9dca3-d480-4e3d-adaa-b0a89500cfd6.jpg" alt="Интерьер кофейни" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="img/feaa4c79-7a46-4461-8136-085434e5f516.jpg" alt="Бабл ти напитки" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src="img/ffec831f-a0a9-4174-90e8-aa0c487f9863.jpg" alt="Чайная церемония" className="w-full h-full object-cover" />
            </div>
            {[4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Icon name="Image" size={32} className="text-slate-400 mx-auto mb-2" />
                  <span className="text-xs text-slate-500">Фото {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Отзывы гостей</h2>
            <p className="text-slate-600">Что говорят о нас наши любимые посетители</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 border-0 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{review.name}</div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Акции и предложения</h2>
            <p className="text-slate-600">Специальные предложения для наших гостей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="p-6 border-0 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-secondary text-white">{promo.badge}</Badge>
                  <Icon name="Gift" size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{promo.title}</h3>
                <p className="text-slate-600">{promo.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Доставка</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Ваш любимый bubble tea теперь можно заказать с доставкой на дом или в офис
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">30-45 минут</h3>
                <p className="text-slate-600 text-sm">Среднее время доставки</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Бесплатно от 800₽</h3>
                <p className="text-slate-600 text-sm">При заказе на сумму от 800 рублей</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Гарантия качества</h3>
                <p className="text-slate-600 text-sm">Свежие напитки или возврат средств</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
              <Icon name="Smartphone" size={20} />
              Заказать доставку
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-slate-300">Найдите нас или свяжитесь с нами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-slate-700/50 border-slate-600 text-center">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Адрес</h3>
              <p className="text-slate-300">ул. Пушкина, 15<br />Москва, 101000</p>
            </Card>
            
            <Card className="p-6 bg-slate-700/50 border-slate-600 text-center">
              <Icon name="Phone" size={32} className="text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Телефон</h3>
              <p className="text-slate-300">+7 (495) 123-45-67<br />+7 (985) 987-65-43</p>
            </Card>
            
            <Card className="p-6 bg-slate-700/50 border-slate-600 text-center">
              <Icon name="Clock" size={32} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Режим работы</h3>
              <p className="text-slate-300">Пн-Пт: 08:00-22:00<br />Сб-Вс: 10:00-23:00</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-4 mb-6">
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Icon name="Instagram" size={20} />
                Instagram
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Icon name="MessageCircle" size={20} />
                Telegram
              </Button>
            </div>
            <p className="text-slate-400 text-sm">© 2024 Bubble Tea House. Все права защищены.</p>
          </div>
        </div>
      </section>
    </div>
  );
}