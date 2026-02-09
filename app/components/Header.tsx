"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "/catalog", label: "МАФ" },
    { href: "/solutions/baskets", label: "Корзины" },
    { href: "/solutions/ventilation", label: "Вентиляция" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "FAQ" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/logo-icon.png"
                            alt="Urban Furniture"
                            className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="text-xl font-bold text-gray-900">
                            Urban<span className="text-primary">Furniture</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/request" className="btn-primary text-sm">
                            <span>Оставить заявку</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100">
                    <nav className="container-custom py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-600 hover:text-primary font-medium transition-colors py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/request"
                            onClick={() => setIsMenuOpen(false)}
                            className="btn-primary text-sm justify-center mt-2 w-full"
                        >
                            <span>Оставить заявку</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
