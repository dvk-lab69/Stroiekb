"use client";

import { useState } from "react";
import { ArrowRight, Wind, Thermometer, Shield, Palette, Volume2, Droplets, Check, Download, ChevronLeft, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ventilationCatalog, Category, SubCategory, Product } from "./data";
import { cn } from "@/lib/utils";

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

export default function VentilationClient() {
    const [activeTab, setActiveTab] = useState(ventilationCatalog[0].id);
    const [activeSubCategory, setActiveSubCategory] = useState<SubCategory | null>(null);

    const activeCategory = ventilationCatalog.find(c => c.id === activeTab) || ventilationCatalog[0];

    // Handle Tab Change: Reset active subcategory
    const handleTabChange = (id: string) => {
        setActiveTab(id);
        setActiveSubCategory(null);
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Профессиональные решения
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Промышленная <span className="gradient-text">вентиляция</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Комплексные поставки вентиляционного оборудования: от дефлекторов до приточно-вытяжных установок.
                                Расчёт, подбор и производство под ваши задачи.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/request" className="btn-primary">
                                    <span>Заказать расчёт</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg shadow-gray-200/50">
                            <Image
                                src="/images/ventilation-hero-user.jpg"
                                alt="Промышленная вентиляция"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Преимущества
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Поставляем оборудование, проверенное временем и суровыми климатическими условиями
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-transparent rounded-2xl hover:bg-gray-50 transition-all"
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

            {/* Smart Catalog */}
            <section className="section bg-gray-50/50" id="catalog">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Каталог оборудования
                        </h2>
                        <p className="text-gray-600">
                            Выберите категорию, чтобы увидеть доступные решения
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {ventilationCatalog.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleTabChange(category.id)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeTab === category.id
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:text-primary"
                                )}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Content */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Category Header */}
                        <div className="bg-primary rounded-3xl p-8 lg:p-12 mb-8 text-white relative overflow-hidden">
                            <div className="relative z-10 max-w-3xl">
                                <h3 className="text-3xl font-bold mb-4">{activeCategory.title}</h3>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    {activeCategory.description}
                                </p>
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/2" />
                        </div>

                        {activeSubCategory ? (
                            /* VIEW 1: Subcategory Products */
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                <button
                                    onClick={() => setActiveSubCategory(null)}
                                    className="flex items-center gap-2 text-primary font-medium mb-6 hover:underline transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Назад к категориям
                                </button>

                                <h4 className="text-2xl font-bold text-gray-900 mb-6 pl-2 border-l-4 border-primary">
                                    {activeSubCategory.title}
                                </h4>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {activeSubCategory.products.map((product, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:border-primary/20 group"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-gray-600 text-sm mb-4">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {product.characteristics && (
                                                <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                                                    {product.characteristics.map((char, i) => (
                                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span>{char}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-4">
                                                <div className="flex-1">
                                                    {product.prices && product.prices.length > 0 ? (
                                                        <div className="flex flex-col gap-1.5">
                                                            {product.prices.map((p, i) => (
                                                                <div key={i} className="flex justify-between items-center text-sm">
                                                                    <span className="text-gray-500 mr-2">{p.label}:</span>
                                                                    <span className="font-bold text-primary whitespace-nowrap">от {p.value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <span className="text-2xl font-bold text-primary">
                                                            от {product.price}
                                                        </span>
                                                    )}
                                                </div>
                                                <Link
                                                    href="/request"
                                                    className="btn-secondary text-sm py-2 px-4 whitespace-nowrap self-end"
                                                >
                                                    Заказать
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (activeCategory.subcategories && activeCategory.subcategories.length > 0) ? (
                            /* VIEW 2: Subcategories List */
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                {activeCategory.subcategories.map((sub, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveSubCategory(sub)}
                                        className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:border-primary/20 cursor-pointer group flex flex-col items-center text-center h-full"
                                    >
                                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                            <LayoutGrid className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {sub.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm mb-6">
                                            {sub.products.length} товаров(а)
                                        </p>
                                        <span className="text-primary text-sm font-medium flex items-center gap-2 mt-auto opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            Перейти к товарам
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* VIEW 3: Flat Category Products */
                            <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                {activeCategory.products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:border-primary/20 group"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-4">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>

                                        {product.characteristics && (
                                            <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                                                {product.characteristics.map((char, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{char}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-4">
                                            <div className="flex-1">
                                                {product.prices && product.prices.length > 0 ? (
                                                    <div className="flex flex-col gap-1.5">
                                                        {product.prices.map((p, i) => (
                                                            <div key={i} className="flex justify-between items-center text-sm">
                                                                <span className="text-gray-500 mr-2">{p.label}:</span>
                                                                <span className="font-bold text-primary whitespace-nowrap">от {p.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-2xl font-bold text-primary">
                                                        от {product.price}
                                                    </span>
                                                )}
                                            </div>
                                            <Link
                                                href="/request"
                                                className="btn-secondary text-sm py-2 px-4 whitespace-nowrap self-end"
                                            >
                                                Заказать
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
