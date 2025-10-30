import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 0, title: 'Обзор', icon: 'Home' },
    { id: 1, title: 'Статистика продаж', icon: 'TrendingUp' },
    { id: 2, title: 'Аналитика трафика', icon: 'Users' },
    { id: 3, title: 'Конверсия и воронка', icon: 'Filter' },
    { id: 4, title: 'Прогноз развития', icon: 'LineChart' },
    { id: 5, title: 'Рекомендации', icon: 'Lightbulb' },
  ];

  const salesData = {
    revenue: '₽2,450,000',
    orders: 1834,
    avgCheck: '₽1,336',
    growth: '+24%',
  };

  const trafficData = {
    visits: 45670,
    uniqueVisitors: 32100,
    cartRate: '12.4%',
    returnRate: '28%',
  };

  const funnelSteps = [
    { stage: 'Просмотры карточки', value: 45670, percent: 100 },
    { stage: 'Добавление в корзину', value: 5663, percent: 12.4 },
    { stage: 'Оформление заказа', value: 2267, percent: 5.0 },
    { stage: 'Оплата заказа', value: 1834, percent: 4.0 },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">
            WB Продвижение: Аналитика и Метрики
          </h1>
          <p className="text-muted-foreground">
            Отчёт за период: сентябрь 2024 - октябрь 2024
          </p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <Button
              key={slide.id}
              variant={activeSlide === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveSlide(index)}
              className="flex-shrink-0"
            >
              <Icon name={slide.icon} className="mr-2" size={16} />
              {slide.title}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 min-h-[600px] animate-fade-in">
          {activeSlide === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Обзор эффективности</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Общие показатели работы магазина на Wildberries за отчётный период
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="DollarSign" size={16} />
                      Выручка
                    </CardDescription>
                    <CardTitle className="text-3xl">{salesData.revenue}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <Icon name="TrendingUp" size={16} />
                      <span>{salesData.growth}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      Заказов
                    </CardDescription>
                    <CardTitle className="text-3xl">{salesData.orders}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Средний чек: {salesData.avgCheck}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Eye" size={16} />
                      Визиты
                    </CardDescription>
                    <CardTitle className="text-3xl">{trafficData.visits.toLocaleString()}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Уникальных: {trafficData.uniqueVisitors.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Target" size={16} />
                      Конверсия
                    </CardDescription>
                    <CardTitle className="text-3xl">{trafficData.cartRate}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">В корзину</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} />
                    Ключевые достижения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <p>Рост продаж на 24% по сравнению с предыдущим периодом</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <p>Увеличение среднего чека на 8%</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                    <p>Рост трафика на карточки товаров на 34%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSlide === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Статистика продаж</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Детальный анализ выручки и динамики заказов
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Динамика продаж по неделям</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { week: 'Неделя 1', revenue: 550000, orders: 410 },
                        { week: 'Неделя 2', revenue: 620000, orders: 465 },
                        { week: 'Неделя 3', revenue: 580000, orders: 432 },
                        { week: 'Неделя 4', revenue: 700000, orders: 527 },
                      ].map((item) => (
                        <div key={item.week} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.week}</span>
                            <span className="text-muted-foreground">
                              ₽{item.revenue.toLocaleString()} • {item.orders} заказов
                            </span>
                          </div>
                          <Progress value={(item.revenue / 700000) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Топ-5 товаров по продажам</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Кроссовки спортивные', sales: 187, revenue: 280500 },
                        { name: 'Футболка хлопок', sales: 245, revenue: 171500 },
                        { name: 'Джинсы классические', sales: 156, revenue: 234000 },
                        { name: 'Худи оверсайз', sales: 198, revenue: 197000 },
                        { name: 'Куртка демисезон', sales: 143, revenue: 286000 },
                      ].map((product, index) => (
                        <div key={product.name} className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {product.sales} шт • ₽{product.revenue.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Сравнение с предыдущим периодом</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Выручка</p>
                      <p className="text-2xl font-bold">₽2,450,000</p>
                      <p className="text-sm text-green-600 font-medium mt-1">
                        +₽474,000 (+24%)
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Заказов</p>
                      <p className="text-2xl font-bold">1,834</p>
                      <p className="text-sm text-green-600 font-medium mt-1">+312 (+20%)</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Средний чек</p>
                      <p className="text-2xl font-bold">₽1,336</p>
                      <p className="text-sm text-green-600 font-medium mt-1">+₽99 (+8%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSlide === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Аналитика трафика</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Источники посетителей и поведенческие метрики
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Источники трафика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { source: 'Поиск WB', visits: 22835, percent: 50 },
                        { source: 'Рекомендации', visits: 13701, percent: 30 },
                        { source: 'Категории', visits: 6851, percent: 15 },
                        { source: 'Внешние ссылки', visits: 2283, percent: 5 },
                      ].map((item) => (
                        <div key={item.source} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.source}</span>
                            <span className="text-muted-foreground">
                              {item.visits.toLocaleString()} ({item.percent}%)
                            </span>
                          </div>
                          <Progress value={item.percent} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Поведенческие метрики</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} className="text-muted-foreground" />
                        <span className="text-sm">Среднее время на странице</span>
                      </div>
                      <span className="font-bold">2:34</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="MousePointer" size={20} className="text-muted-foreground" />
                        <span className="text-sm">Глубина просмотра</span>
                      </div>
                      <span className="font-bold">3.2 стр.</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="UserCheck" size={20} className="text-muted-foreground" />
                        <span className="text-sm">Возврат посетителей</span>
                      </div>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Percent" size={20} className="text-muted-foreground" />
                        <span className="text-sm">Показатель отказов</span>
                      </div>
                      <span className="font-bold">42%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Динамика трафика по дням недели</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { day: 'Понедельник', visits: 5680 },
                      { day: 'Вторник', visits: 6120 },
                      { day: 'Среда', visits: 7340 },
                      { day: 'Четверг', visits: 6890 },
                      { day: 'Пятница', visits: 7560 },
                      { day: 'Суббота', visits: 8340 },
                      { day: 'Воскресенье', visits: 7450 },
                    ].map((item) => (
                      <div key={item.day} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.day}</span>
                          <span className="text-muted-foreground">
                            {item.visits.toLocaleString()} визитов
                          </span>
                        </div>
                        <Progress value={(item.visits / 8340) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSlide === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Конверсия и воронка продаж</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Анализ этапов пути клиента от просмотра до покупки
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Воронка конверсии</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {funnelSteps.map((step, index) => (
                      <div key={step.stage} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                              {index + 1}
                            </div>
                            <span className="font-medium">{step.stage}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{step.value.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{step.percent}%</p>
                          </div>
                        </div>
                        <Progress value={step.percent} className="h-3" />
                        {index < funnelSteps.length - 1 && (
                          <p className="text-xs text-muted-foreground pl-11">
                            Отсев: {(funnelSteps[index].value - funnelSteps[index + 1].value).toLocaleString()} человек
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Конверсия по этапам</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Просмотр → Корзина</p>
                      <p className="text-2xl font-bold">12.4%</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Корзина → Оформление</p>
                      <p className="text-2xl font-bold">40.0%</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Оформление → Оплата</p>
                      <p className="text-2xl font-bold">80.9%</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-green-50">
                      <p className="text-sm text-muted-foreground mb-1">Общая конверсия</p>
                      <p className="text-2xl font-bold text-green-600">4.0%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Причины отказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { reason: 'Высокая стоимость доставки', percent: 35 },
                        { reason: 'Долгий срок доставки', percent: 28 },
                        { reason: 'Нет нужного размера', percent: 18 },
                        { reason: 'Изменение решения', percent: 12 },
                        { reason: 'Технические проблемы', percent: 7 },
                      ].map((item) => (
                        <div key={item.reason} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{item.reason}</span>
                            <span className="text-muted-foreground">{item.percent}%</span>
                          </div>
                          <Progress value={item.percent} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSlide === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Прогноз развития</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Планируемые показатели на следующий период
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Консервативный</CardTitle>
                    <CardDescription className="text-center">При сохранении тренда</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Выручка</p>
                      <p className="text-2xl font-bold">₽2,940,000</p>
                      <p className="text-sm text-green-600">+20%</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Заказов</p>
                      <p className="text-2xl font-bold">2,200</p>
                      <p className="text-sm text-green-600">+20%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary">
                  <CardHeader>
                    <CardTitle className="text-center">Оптимальный</CardTitle>
                    <CardDescription className="text-center">С улучшениями</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center p-4 border rounded-lg bg-blue-50">
                      <p className="text-sm text-muted-foreground mb-1">Выручка</p>
                      <p className="text-2xl font-bold text-blue-600">₽3,430,000</p>
                      <p className="text-sm text-blue-600">+40%</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-blue-50">
                      <p className="text-sm text-muted-foreground mb-1">Заказов</p>
                      <p className="text-2xl font-bold text-blue-600">2,568</p>
                      <p className="text-sm text-blue-600">+40%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Амбициозный</CardTitle>
                    <CardDescription className="text-center">Максимальный рост</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Выручка</p>
                      <p className="text-2xl font-bold">₽3,920,000</p>
                      <p className="text-sm text-green-600">+60%</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Заказов</p>
                      <p className="text-2xl font-bold">2,934</p>
                      <p className="text-sm text-green-600">+60%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Факторы роста для достижения целей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Icon name="TrendingUp" size={18} className="text-green-600" />
                        Возможности роста
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          <span>Расширение ассортимента на 15-20 позиций</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          <span>Улучшение качества фото и описаний</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          <span>Увеличение рекламного бюджета на 30%</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5" />
                          <span>Оптимизация цен и участие в акциях</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Icon name="AlertTriangle" size={18} className="text-amber-600" />
                        Риски и угрозы
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                          <span>Усиление конкуренции в категории</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                          <span>Изменение алгоритмов ранжирования WB</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                          <span>Сезонные колебания спроса</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                          <span>Рост стоимости рекламы на платформе</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSlide === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Рекомендации по улучшению</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Практические шаги для повышения эффективности продаж
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-amber-500" />
                      Приоритет 1: Критические улучшения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r">
                      <h4 className="font-semibold mb-2">Снизить стоимость доставки</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        35% отказов связаны с высокой стоимостью доставки
                      </p>
                      <p className="text-sm font-medium">
                        → Использовать собственный склад WB или оптимизировать логистику
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r">
                      <h4 className="font-semibold mb-2">Расширить размерную сетку</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        18% отказов из-за отсутствия нужного размера
                      </p>
                      <p className="text-sm font-medium">
                        → Анализ популярных размеров и увеличение запасов
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" size={20} className="text-blue-500" />
                      Приоритет 2: Оптимизация конверсии
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                      <h4 className="font-semibold mb-2">Улучшить карточки товаров</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Потенциал роста конверсии с 12.4% до 18%
                      </p>
                      <p className="text-sm font-medium">
                        → Профессиональные фото, инфографика, видео-обзоры, детальные описания
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                      <h4 className="font-semibold mb-2">Оптимизация ключевых слов</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        50% трафика из поиска - максимальный потенциал
                      </p>
                      <p className="text-sm font-medium">
                        → Анализ поисковых запросов и добавление релевантных ключевых слов
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-green-500" />
                      Приоритет 3: Развитие и масштабирование
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                      <h4 className="font-semibold mb-2">Запуск рекламных кампаний</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Увеличение рекламного бюджета на топовые позиции
                      </p>
                      <p className="text-sm font-medium">
                        → Реклама в поиске, карусель, баннеры на главной
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                      <h4 className="font-semibold mb-2">Программа лояльности</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Возврат покупателей 28% - можно увеличить до 40%
                      </p>
                      <p className="text-sm font-medium">
                        → Промокоды для повторных покупок, бонусы за отзывы
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                      <h4 className="font-semibold mb-2">Расширение ассортимента</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Кросс-продажи и дополнительные позиции
                      </p>
                      <p className="text-sm font-medium">
                        → Добавить сопутствующие товары к топ-5 позициям
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600" />
                      Ожидаемый эффект от внедрения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Рост конверсии</p>
                        <p className="text-3xl font-bold text-green-600">+45%</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Рост выручки</p>
                        <p className="text-3xl font-bold text-green-600">+40%</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Снижение отказов</p>
                        <p className="text-3xl font-bold text-green-600">-30%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={activeSlide === 0}
            className="gap-2"
          >
            <Icon name="ChevronLeft" size={20} />
            Назад
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={activeSlide === slides.length - 1}
            className="gap-2"
          >
            Далее
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
