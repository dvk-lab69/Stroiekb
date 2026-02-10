import Link from "next/link";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const productLinks = [
    { href: "/catalog", label: "Для парков и скверов" },
    { href: "/catalog", label: "Для ЖК и дворов" },
    { href: "/solutions/baskets", label: "Корзины для кондиционеров" },
];

const companyLinks = [
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "FAQ" },
    { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
    return (
        <footer className="bg-[#594a45] text-white">


            {/* Main Footer */}
            <div className="container-custom !pt-14 !pb-8 px-4 sm:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Stroi<span className="text-primary">Ekb</span>
                            </span>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Производственная компания полного цикла. Благоустройство городских пространств и фасадные решения.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Продукция</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Компания</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Контакты</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:m4Rk@yandex.ru"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    m4Rk@yandex.ru
                                </a>
                            </li>
                            <li>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="tel:+79122449003"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        <Phone className="w-4 h-4" />
                                        +7 (912) 244-90-03
                                    </a>
                                    <a
                                        href="tel:+79122417373"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm pl-7"
                                    >
                                        +7 (912) 241-73-73
                                    </a>
                                    <a
                                        href="tel:+79122487959"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm pl-7"
                                    >
                                        +7 (912) 248-79-59
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/80 text-sm">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>г. Екатеринбург, ул. Тверитина, 34А</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/60 text-sm">
                        © 2026 StroiEkb. Все права защищены.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
