"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import SchemaOrg from "../components/SchemaOrg";

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

// Flatten FAQ items for Schema.org
const allFaqItems = faqItems.flatMap(category =>
    category.items.map(item => ({
        question: item.question,
        answer: item.answer
    }))
);

export default function ContactsPage() {
    const [openCategory, setOpenCategory] = useState<string | null>("Производство и сроки");
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    return (
        <>
            {/* FAQ Schema.org markup */}
            <SchemaOrg type="faq" faqItems={allFaqItems} />

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
                            <div className="lg:col-span-4">
                                <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                                    <h2 className="font-bold text-gray-900 mb-4">Категории</h2>
                                    <div className="space-y-2">
                                        {faqItems.map((category, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setOpenCategory(category.category);
                                                    setOpenQuestion(null);
                                                }}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${openCategory === category.category
                                                        ? "bg-primary text-white"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {category.category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ List */}
                            <div className="lg:col-span-8">
                                {faqItems
                                    .filter(cat => cat.category === openCategory)
                                    .map((category, catIdx) => (
                                        <div key={catIdx} className="space-y-4">
                                            {category.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-50 rounded-2xl overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() =>
                                                            setOpenQuestion(
                                                                openQuestion === item.question ? null : item.question
                                                            )
                                                        }
                                                        className="w-full flex items-center justify-between p-6 text-left"
                                                    >
                                                        <span className="font-semibold text-gray-900 pr-4">
                                                            {item.question}
                                                        </span>
                                                        <div
                                                            className={`flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-transform ${openQuestion === item.question ? "rotate-45" : ""
                                                                }`}
                                                        >
                                                            <Plus className="w-4 h-4 text-primary" />
                                                        </div>
                                                    </button>
                                                    {openQuestion === item.question && (
                                                        <div className="px-6 pb-6">
                                                            <p className="text-gray-600 leading-relaxed">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
