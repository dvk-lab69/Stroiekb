import { ArrowRight, Shield, Thermometer, Ruler, Palette, BadgeCheck } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Shield,
        title: "Защита оборудования",
        description: "Надёжная защита наружных блоков кондиционеров от осадков, мусора и вандализма.",
    },
    {
        icon: Thermometer,
        title: "Вентиляция",
        description: "Оптимальный воздухообмен для эффективной работы климатического оборудования.",
    },
    {
        icon: Ruler,
        title: "Любые размеры",
        description: "Изготовление под любой типоразмер блока. Индивидуальный расчёт.",
    },
    {
        icon: Palette,
        title: "Покраска по RAL",
        description: "Порошковое окрашивание в любой цвет по каталогу RAL.",
    },
];

const models = [
    { name: "KB-01", size: "800×600×300 мм", price: "от 4 500 ₽" },
    { name: "KB-02", size: "1000×700×350 мм", price: "от 5 800 ₽" },
    { name: "KB-03", size: "1200×800×400 мм", price: "от 7 200 ₽" },
    { name: "KB-04 (двойная)", size: "1600×800×400 мм", price: "от 9 500 ₽" },
];

export default function BasketsPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Фасадные решения
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Корзины для <span className="gradient-text">кондиционеров</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Защитные корзины для наружных блоков кондиционеров.
                                Соответствие дизайн-коду и требованиям управляющих компаний.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/request" className="btn-primary">
                                    <span>Заказать расчёт</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/portfolio" className="btn-secondary">
                                    <span>Примеры работ</span>
                                </Link>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
                            <img
                                src="/images/products/basket-1.png"
                                alt="Корзина для кондиционера"
                                className="w-full h-full object-contain relative z-10"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Преимущества наших корзин
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Качественная защита климатического оборудования с сохранением эстетики фасада
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all">
                                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-all" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Models */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Типовые модели
                        </h2>
                        <p className="text-gray-600">
                            Готовые решения для стандартных размеров. Индивидуальное изготовление — по запросу.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {model.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    {model.size}
                                </p>
                                <div className="text-2xl font-bold text-primary">
                                    {model.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link href="/request" className="btn-primary">
                            <span>Получить расчёт</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Certificates */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="bg-emerald-50 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <BadgeCheck className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Гарантия качества
                            </h3>
                            <p className="text-gray-600">
                                Все изделия сертифицированы и соответствуют требованиям ГОСТ.
                                Гарантия на покрытие — 5 лет. Используем только качественные материалы
                                и проверенные технологии.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
