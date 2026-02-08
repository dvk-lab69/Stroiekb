import Link from "next/link";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const productLinks = [
    { href: "/catalog", label: "Для парков и скверов" },
    { href: "/catalog", label: "Для ЖК и дворов" },
    { href: "/solutions/baskets", label: "Фасадные системы" },
    { href: "/portfolio", label: "Индивидуальные проекты" },
];

const companyLinks = [
    { href: "/about", label: "О нас" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/contacts", label: "FAQ" },
    { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
    return (
        <footer className="bg-[#594a45] text-white">


            {/* Main Footer */}
            <div className="container-custom !pt-14 !pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Urban<span className="text-primary">Furniture</span>
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
                                    href="mailto:info@urbanfurniture.ru"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    info@urbanfurniture.ru
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+78001234567"
                                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    8 (800) 123-45-67
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/80 text-sm">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>г. Екатеринбург, ул. Промышленная, 15</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/60 text-sm">
                        © 2026 Urban Furniture. Все права защищены.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                            Договор оферты
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
