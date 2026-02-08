import { ArrowRight, Wind, Thermometer, Shield, Palette, Volume2, Droplets } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Wind,
        title: "Эффективная вентиляция",
        description: "Оптимальное распределение воздушного потока для технических помещений.",
    },
    {
        icon: Shield,
        title: "Антивандальность",
        description: "Прочная конструкция, устойчивая к механическим повреждениям.",
    },
    {
        icon: Droplets,
        title: "Защита от осадков",
        description: "Специальная геометрия ламелей предотвращает попадание воды.",
    },
    {
        icon: Volume2,
        title: "Шумопоглощение",
        description: "Снижение уровня шума от работающего оборудования.",
    },
    {
        icon: Thermometer,
        title: "Термостойкость",
        description: "Работа в диапазоне температур от -50°C до +70°C.",
    },
    {
        icon: Palette,
        title: "Любой цвет RAL",
        description: "Порошковое окрашивание под цвет фасада здания.",
    },
];

const products = [
    {
        name: "Решётка вентиляционная VR-01",
        description: "Стандартная решётка для вентиляционных шахт",
        sizes: ["400×400", "500×500", "600×600", "800×800"],
        price: "от 2 500 ₽",
    },
    {
        name: "Решётка с регулировкой VR-02",
        description: "С регулируемыми ламелями для контроля потока воздуха",
        sizes: ["500×500", "600×600", "800×800"],
        price: "от 4 200 ₽",
    },
    {
        name: "Экран декоративный VR-03",
        description: "Для скрытия технического оборудования на фасаде",
        sizes: ["1000×1000", "1200×1200", "по размерам"],
        price: "от 6 800 ₽",
    },
    {
        name: "Жалюзийная решётка VR-04",
        description: "Максимальная защита от осадков при сохранении вентиляции",
        sizes: ["400×400", "600×600", "800×800", "1000×1000"],
        price: "от 3 800 ₽",
    },
];

export default function VentilationPage() {
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
                                Вентиляционные <span className="gradient-text">системы</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Решётки, экраны и ламели для вентиляции технических помещений.
                                Функциональность и эстетика в единой конструкции.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contacts" className="btn-primary">
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
                                alt="Вентиляционная система"
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
                            Характеристики
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Наши вентиляционные системы сочетают надёжность и современный дизайн
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-transparent rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Продукция
                        </h2>
                        <p className="text-gray-600">
                            Типовые решения и изготовление по индивидуальным размерам
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.sizes.map((size, sizeIndex) => (
                                        <span
                                            key={sizeIndex}
                                            className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-md"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-2xl font-bold text-primary">
                                        {product.price}
                                    </span>
                                    <Link
                                        href="/contacts"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                                    >
                                        <span>Заказать</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link href="/contacts" className="btn-primary">
                            <span>Обсудить проект</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
