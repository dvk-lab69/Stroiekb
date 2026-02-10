"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, SlidersHorizontal, Search } from "lucide-react";
import { products, categories } from "../data/catalog";

export default function CatalogClient() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="bg-white pb-12 pt-12 shadow-sm">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Продукция
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-outfit">
                            Каталог <span className="gradient-text">МАФ</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl font-light">
                            Малые архитектурные формы для благоустройства городских пространств, парков и жилых комплексов.
                            Собственное производство, качественные материалы и современный дизайн.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="mt-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:w-80 group">
                            <input
                                type="text"
                                placeholder="Поиск по названию..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                            />
                            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section">
                <div className="container-custom">
                    {filteredProducts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay Tag */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-semibold text-gray-900 shadow-sm">
                                                {categories.find(c => c.id === product.category)?.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        {product.dimensions && (
                                            <p className="text-sm text-gray-500 mb-4 font-mono">
                                                {product.dimensions}
                                            </p>
                                        )}

                                        <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-5">
                                            <div>
                                                <div className="text-xs text-gray-400 mb-0.5">Цена</div>
                                                <div className="text-lg font-bold text-gray-900">
                                                    от {product.price.toLocaleString("ru-RU")} ₽
                                                    <span className="text-sm font-normal text-gray-400 ml-1">/{product.unit}</span>
                                                </div>
                                            </div>
                                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ничего не найдено</h3>
                            <p className="text-gray-500">Попробуйте изменить категорию или поисковый запрос</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                                className="mt-6 text-primary font-medium hover:underline"
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
