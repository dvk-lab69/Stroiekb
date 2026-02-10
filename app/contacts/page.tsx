import { Metadata } from "next";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
    title: "Контакты StroiEkb — Адрес производства и телефон",
    description: "Связаться с StroiEkb. Адрес производства в Свердловской области, телефон, email и форма обратной связи. Ответы на частые вопросы (FAQ).",
};

export default function ContactsPage() {
    return <ContactsClient />;
}
