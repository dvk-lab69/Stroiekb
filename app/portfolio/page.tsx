import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "ЖК «Северные высоты»",
        location: "Екатеринбург",
        year: "2025",
        category: "Фасадные решения",
        description: "Корзины для кондиционеров и вентиляционные решётки для 12 жилых домов.",
        items: "450+ изделий",
    },
    {
        id: 2,
        title: "Парк «Зелёная миля»",
        location: "Тюмень",
        year: "2024",
        category: "Благоустройство",
        description: "Комплексное благоустройство: скамейки, урны, велопарковки, навесы.",
        items: "120+ изделий",
    },
    {
        id: 3,
        title: "ЖК «Панорама»",
        location: "Челябинск",
        year: "2024",
        category: "Фасадные решения",
        description: "Декоративные экраны и ламели для технических балконов.",
        items: "280+ изделий",
    },
    {
        id: 4,
        title: "Набережная реки Исеть",
        location: "Екатеринбург",
        year: "2024",
        category: "Благоустройство",
        description: "Парковая мебель, перголы, вазоны для общественной зоны.",
        items: "85+ изделий",
    },
    {
        id: 5,
        title: "ЖК «Солнечный»",
        location: "Новосибирск",
        year: "2023",
        category: "Фасадные решения",
        description: "Полный комплект фасадных решений для 8 домов комплекса.",
        items: "620+ изделий",
    },
    {
        id: 6,
        title: "Сквер имени Попова",
        location: "Екатеринбург",
        year: "2023",
        category: "Благоустройство",
        description: "Реконструкция сквера: современные скамейки, фонари, навесы.",
        items: "150+ изделий",
    },
];

export default function PortfolioPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Наши работы
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Реализованные <span className="gradient-text">проекты</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Более 500 проектов по всей России. От небольших парковых зон
                            до комплексного благоустройства жилых комплексов.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-white border-b border-gray-100">
                <div className="container-custom py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-1">500+</div>
                            <div className="text-gray-500">проектов</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-1">50+</div>
                            <div className="text-gray-500">городов</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-1">15 000+</div>
                            <div className="text-gray-500">изделий</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-1">12</div>
                            <div className="text-gray-500">лет опыта</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="card overflow-hidden group"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] bg-gray-100 relative group-hover:opacity-90 transition-opacity">
                                    <img
                                        src="/images/project-1.png"
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {project.year}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm font-medium text-primary">
                                            {project.items}
                                        </span>
                                        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors">
                                            <span>Подробнее</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6">
                            Хотите стать частью нашего портфолио?
                        </p>
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
