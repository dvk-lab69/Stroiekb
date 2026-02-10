import { Factory, Award, Truck, Paintbrush, Building2, BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const productionSteps = [
    {
        icon: Truck,
        step: "01",
        title: "Снабжение",
        description: "Закупка сертифицированных материалов: сталь, дерево, порошковые краски от проверенных поставщиков.",
    },
    {
        icon: Factory,
        step: "02",
        title: "Изготовление",
        description: "Лазерная резка, гибка металла, сварка на современном оборудовании с ЧПУ.",
    },
    {
        icon: Paintbrush,
        step: "03",
        title: "Отделка",
        description: "Порошковое окрашивание, обработка древесины, контроль качества на каждом этапе.",
    },
    {
        icon: Building2,
        step: "04",
        title: "Логистика",
        description: "Доставка по всей России.",
    },
];

const certificates = [
    "ISO 9001:2015",
    "ГОСТ Р ИСО 9001",
    "Сертификат соответствия ТР ТС",
    "Гарантия 5 лет",
];


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "О компании StroiEkb — Производство полного цикла",
    description: "Узнайте больше о производстве StroiEkb. Собственное конструкторское бюро, современные станки и команда профессионалов в Екатеринбурге.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            О производстве
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Создано для <span className="gradient-text">Города</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Создано выдерживать суровые городские условия, сохраняя эстетическую
                            целостность. Наша продукция служит десятилетиями.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Наша миссия
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Мы верим, что качественное благоустройство меняет жизнь людей к лучшему.
                                Каждая скамейка в парке, каждый элемент фасада — это часть городской среды,
                                с которой взаимодействуют тысячи людей ежедневно.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Наша команда объединяет инженеров, дизайнеров и производственников
                                с одной целью — создавать продукцию, которой можно гордиться.
                            </p>
                        </div>
                        <div className="bg-primary rounded-3xl relative overflow-hidden h-full min-h-[400px] shadow-lg flex items-center justify-center text-center p-8">
                            <div className="absolute inset-0 opacity-20">
                                <img
                                    src="/images/factory-interior.png"
                                    alt="Производство"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />

                            <div className="relative z-10 text-white">
                                <div className="mb-6 last:mb-0">
                                    <div className="text-5xl lg:text-7xl font-bold mb-2">100%</div>
                                    <div className="text-white/90 text-xl font-medium">локализация</div>
                                </div>
                                <div className="w-16 h-1 bg-white/20 mx-auto my-6 rounded-full" />
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2">Сделано</div>
                                    <div className="text-white/90 text-xl font-medium">в России</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Cycle */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Как мы работаем
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Производственный цикл
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productionSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300"
                            >
                                {/* Step Number */}
                                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">
                                    {step.step}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-all" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Arrow */}
                                {index < productionSteps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-8 h-8 text-gray-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
