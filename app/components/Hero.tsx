import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Gradient Accent */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Производственная компания полного цикла
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                        Благоустройство города{" "}
                        <span className="gradient-text">и решения для фасадов</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                        Мы создаем современную городскую среду, объединяя функциональность,
                        эстетику и долговечность в каждом проекте.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contacts" className="btn-primary">
                            <span>Получить расчет</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/catalog" className="btn-secondary">
                            <span>Смотреть каталог</span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-1">12+</div>
                            <div className="text-gray-500 text-sm">лет на рынке</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                            <div className="text-gray-500 text-sm">реализованных проектов</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                            <div className="text-gray-500 text-sm">городов России</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-gray-500 text-sm">поддержка клиентов</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
                <span className="text-xs uppercase tracking-widest">Листайте вниз</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
        </section>
    );
}
