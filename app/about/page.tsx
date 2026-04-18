import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "О компании StroiEkb — Производство полного цикла",
    description: "Узнайте больше о производстве StroiEkb. Собственное конструкторское бюро, современные станки и команда профессионалов в Екатеринбурге.",
};

export default function AboutPage() {
    return <AboutClient />;
}
