"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function CTA() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="section bg-transparent">
            <div className="container-custom">
                <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Начнём сотрудничество
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Готовы обсудить проект?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Оставьте заявку на расчет стоимости. Мы свяжемся с вами в течение
                                часа и подготовим коммерческое предложение.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span className="text-gray-700">Бесплатный расчет проекта</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span className="text-gray-700">Ответ в течение часа</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span className="text-gray-700">Индивидуальное предложение</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="bg-transparent rounded-2xl p-8">
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                                    <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ваше имя
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="Иван Иванов"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Телефон
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="+7 (___) ___-__-__"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Сообщение (необязательно)
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                            placeholder="Опишите ваш проект..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary justify-center"
                                    >
                                        <span>Отправить заявку</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                    <p className="text-xs text-gray-500 text-center">
                                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
