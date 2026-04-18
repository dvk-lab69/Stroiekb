"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Благоустройство города и фасадные решения из металла"
                    fill
                    priority
                    className="object-cover opacity-20"
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
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Комплексные решения для благоустройства
                    </motion.div>

                    {/* Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
                    >
                        Благоустройство города{" "}
                        <span className="gradient-text">и решения для фасадов</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
                    >
                        Мы создаем современную городскую среду, объединяя функциональность,
                        эстетику и долговечность в каждом проекте.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/request" className="btn-primary group">
                            <span>Получить расчет</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/catalog" className="btn-secondary">
                            <span>Смотреть каталог</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
}
