import Link from "next/link";
import { ArrowRight, Trees, Building2 } from "lucide-react";

const directions = [
    {
        icon: Trees,
        title: "Для города",
        description: "Малые архитектурные формы, парковая мебель, велопарковки и элементы благоустройства общественных территорий. Эстетика дерева и прочность стали.",
        links: [
            { href: "/catalog", label: "Скамейки и урны" },
            { href: "/catalog", label: "Навесы и перголы" },
            { href: "/catalog", label: "Качели" },
        ],
        color: "bg-emerald-500",
        accent: "text-emerald-600",
        bgLight: "bg-emerald-50",
    },
    {
        icon: Building2,
        title: "Для застройщиков",
        description: "Фасадные решения для жилых комплексов: корзины для кондиционеров, вентиляционные решетки и декоративные экраны. Соответствие дизайн-коду.",
        links: [
            { href: "/solutions/baskets", label: "Корзины К/Б" },
            { href: "/solutions/ventilation", label: "Ламели" },
            { href: "/solutions/ventilation", label: "Тех. двери" },
        ],
        color: "bg-primary",
        accent: "text-primary",
        bgLight: "bg-primary/5",
    },
];

export default function Directions() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Наши направления
                        </h2>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {directions.map((direction, index) => (
                        <div
                            key={index}
                            className={`${direction.bgLight} relative overflow-hidden rounded-2xl p-8 lg:p-10 group hover:shadow-xl transition-all duration-300 isolate`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]">
                                <img
                                    src={index === 0 ? "/images/direction-city.png" : "/images/direction-developer.png"}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60" />
                            </div>

                            {/* Icon */}
                            <div className={`${direction.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 border border-white/10`}>
                                <direction.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4 relative z-10">
                                {direction.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 group-hover:text-gray-200 transition-colors mb-6 leading-relaxed relative z-10">
                                {direction.description}
                            </p>

                            {/* Links */}
                            <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                                {direction.links.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.href}
                                        className="bg-white group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:!bg-primary hover:!text-white hover:shadow-md transition-all border border-transparent group-hover:border-white/20"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href="/catalog"
                                className={`inline-flex items-center gap-2 ${direction.accent} group-hover:text-white font-semibold group/link relative z-10`}
                            >
                                <span>Смотреть все</span>
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* All Categories Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/catalog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors"
                    >
                        <span>Все категории</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
