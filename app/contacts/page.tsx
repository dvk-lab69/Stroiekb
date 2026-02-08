"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const faqItems = [
    {
        category: "Производство и сроки",
        items: [
            {
                question: "Какие сроки изготовления?",
                answer: "Стандартные изделия (скамейки, урны, велопарковки) изготавливаются за 5-7 рабочих дней. Индивидуальные проекты требуют проектирования и согласования, поэтому срок составляет от 10 рабочих дней. При крупных оптовых заказах график поставок обсуждается индивидуально.",
            },
            {
                question: "Где находится ваше производство?",
                answer: "Наш завод расположен в Екатеринбурге. Мы располагаем полным циклом производства: от лазерной резки металла до порошковой покраски и сборки изделий с деревянными элементами.",
            },
            {
                question: "Можно ли заказать изделия по индивидуальным чертежам?",
                answer: "Да, у нас есть собственное конструкторское бюро. Мы можем разработать проект с нуля по вашему эскизу или адаптировать существующие модели под нужные размеры и дизайн.",
            }
        ]
    },
    {
        category: "Доставка и монтаж",
        items: [
            {
                question: "Работаете ли вы с регионами?",
                answer: "Да, мы работаем по всей России и странам СНГ. Доставка осуществляется надежными транспортными компаниями. Стоимость рассчитывается индивидуально в зависимости от объёма груза и удаленности региона.",
            },
            {
                question: "Осуществляете ли вы монтаж?",
                answer: "Да, у нас есть собственные монтажные бригады в Екатеринбурге и области. Для других регионов мы предоставляем подробные инструкции по сборке и установке, либо можем организовать шеф-монтаж для крупных объектов.",
            },
            {
                question: "Как упакована продукция?",
                answer: "Мы уделяем особое внимание упаковке, чтобы изделия доехали без повреждений. Используем воздушно-пузырчатую пленку, картон и жесткую обрешетку для транспортировки.",
            }
        ]
    },
    {
        category: "Гарантия и материалы",
        items: [
            {
                question: "Какая гарантия на продукцию?",
                answer: "Мы даем гарантию 5 лет на полимерно-порошковое покрытие и 10 лет на целостность металлических конструкций. При правильной эксплуатации и ежегодном обслуживании срок службы наших изделий составляет более 25 лет.",
            },
            {
                question: "Какие материалы вы используете?",
                answer: "Мы используем качественную сталь (Ст3, нержавеющая сталь), алюминий и натуральное дерево (сосна, лиственница, термодерево). Вся древесина обрабатывается защитными маслами и пропитками для устойчивости к влаге и ультрафиолету.",
            },
            {
                question: "Что делать, если изделие повредили вандалы?",
                answer: "Наши изделия обладают антивандальными свойствами, но если повреждение все же произошло, мы всегда готовы поставить необходимые запчасти (рейки, крепеж) или провести ремонтные работы.",
            }
        ]
    },
    {
        category: "Оплата и документы",
        items: [
            {
                question: "Какие способы оплаты?",
                answer: "Мы работаем с юридическими и физическими лицами. Оплата производится по безналичному расчету. Стандартные условия: предоплата 50% для запуска в производство и 50% перед отгрузкой. Для государственных заказчиков возможна постоплата.",
            },
            {
                question: "Предоставляете ли вы сертификаты?",
                answer: "Да, вся наша продукция сертифицирована. Мы предоставляем полный пакет документов: паспорт изделия, инструкцию по эксплуатации, сертификаты соответствия и гарантийный талон.",
            }
        ]
    }
];

export default function ContactsPage() {
    const [openCategory, setOpenCategory] = useState<string | null>("Производство и сроки");
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section bg-transparent pb-8">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            FAQ
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Частые <span className="gradient-text">вопросы</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Все, что вы хотели знать о производстве, доставке и сотрудничестве с Urban Furniture.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="section bg-white pt-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar Categories */}
                        <div className="lg:col-span-3 space-y-2 sticky top-32 h-fit">
                            {faqItems.map((section, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setOpenCategory(section.category)}
                                    className={`w-full text-left px-5 py-4 rounded-xl transition-all font-medium flex items-center justify-between ${openCategory === section.category
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    <span>{section.category}</span>
                                    {openCategory === section.category && <ChevronDown className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>

                        {/* Questions List */}
                        <div className="lg:col-span-9">
                            {faqItems.map((section) => (
                                <div
                                    key={section.category}
                                    className={`space-y-4 ${openCategory === section.category ? "block" : "hidden"}`}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        {section.category}
                                    </h2>

                                    {section.items.map((item, qIdx) => (
                                        <div
                                            key={qIdx}
                                            className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-gray-100"
                                        >
                                            <button
                                                onClick={() => setOpenQuestion(openQuestion === item.question ? null : item.question)}
                                                className="w-full flex items-start justify-between p-6 text-left"
                                            >
                                                <span className="font-semibold text-lg text-gray-900 pr-8">
                                                    {item.question}
                                                </span>
                                                <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openQuestion === item.question ? "rotate-45 bg-primary text-white" : "text-gray-400"
                                                    }`}>
                                                    <Plus className="w-5 h-5" />
                                                </span>
                                            </button>

                                            <div className={`grid transition-all duration-300 ${openQuestion === item.question ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}>
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
