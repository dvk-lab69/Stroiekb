import { ArrowRight, Shield, Thermometer, Ruler, Palette, BadgeCheck } from "lucide-react";
import Link from "next/link";
import ImageCarousel from "@/app/components/ui/image-carousel";

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
    { name: "KB-01", size: "800×600×300 мм" },
    { name: "KB-02", size: "1000×700×350 мм" },
    { name: "KB-03", size: "1200×800×400 мм" },
    { name: "KB-04 (двойная)", size: "1600×800×400 мм" },
];

const basketExamples = [
    { id: 1, imgUrl: "/images/gallery/basket-gallery-1.avif", alt: "Корзина на фасаде" },
    { id: 2, imgUrl: "/images/gallery/basket-gallery-2.avif", alt: "Корзина белая" },
    { id: 3, imgUrl: "/images/gallery/basket-gallery-3.avif", alt: "Двойная корзина" },
    { id: 4, imgUrl: "/images/gallery/basket-gallery-4.avif", alt: "Корзина коричневая" },
    { id: 5, imgUrl: "/images/gallery/basket-gallery-5.avif", alt: "Корзина на новостройке" },
    { id: 6, imgUrl: "/images/gallery/basket-gallery-6.avif", alt: "Монтаж корзины" },
    { id: 7, imgUrl: "/images/gallery/basket-gallery-7.avif", alt: "Пример установки" },
];


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Корзины для кондиционеров на фасад — Купить в Екатеринбурге",
    description: "Защитные корзины для наружных блоков кондиционеров. Любые размеры, покраска по RAL, защита от осадков и вандализма. Собственное производство.",
};

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
                                <a href="#examples" className="btn-secondary">
                                    <span>Примеры работ</span>
                                </a>
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

            {/* Examples Gallery */}
            <section id="examples" className="section bg-white scroll-mt-24">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Примеры установки
                        </h2>
                        <p className="text-gray-600">
                            Посмотрите, как наши корзины выглядят на фасадах зданий
                        </p>
                    </div>

                    <ImageCarousel data={basketExamples} cardsPerView={3} />
                </div>
            </section>


        </div>
    );
}

