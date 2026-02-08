"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function RequestPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="section bg-transparent pb-8">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Заявка
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Оставить <span className="gradient-text">заявку</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ответим на ваши вопросы и подготовим коммерческое предложение в течение 15 минут.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="section bg-white pt-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Контактная информация
                            </h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Телефон</div>
                                        <a href="tel:+78001234567" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                            8 (800) 123-45-67
                                        </a>
                                        <div className="text-sm text-gray-500">Бесплатно по России</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Email</div>
                                        <a href="mailto:info@urbanfurniture.ru" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                            info@urbanfurniture.ru
                                        </a>
                                        <div className="text-sm text-gray-500">Ответим в течение часа</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Адрес</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            г. Екатеринбург, ул. Промышленная, 15
                                        </div>
                                        <div className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?ll=60.605702%2C56.838926&z=12"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Заполните форму
                            </h2>

                            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                                        <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Ваше имя *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                    placeholder="Иван Иванов"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Компания
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                    placeholder="ООО «Название»"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Телефон *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                    placeholder="+7 (___) ___-__-__"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                                                    placeholder="email@company.ru"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Тип продукции
                                            </label>
                                            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                                                <option value="">Выберите категорию</option>
                                                <option value="maf">Малые архитектурные формы</option>
                                                <option value="baskets">Корзины для кондиционеров</option>
                                                <option value="ventilation">Вентиляционные системы</option>
                                                <option value="other">Другое</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Сообщение
                                            </label>
                                            <textarea
                                                rows={4}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none bg-white"
                                                placeholder="Опишите ваш проект, укажите примерные объёмы и сроки..."
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
        </div>
    );
}
