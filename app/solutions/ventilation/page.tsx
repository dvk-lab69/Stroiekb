import { Metadata } from "next";
import VentilationClient from "./VentilationClient";

export const metadata: Metadata = {
    title: "Промышленная вентиляция — Производство и монтаж в Екатеринбурге",
    description: "Комплексные поставки вентиляционного оборудования: дефлекторы, зонты, решетки, узлы прохода. Собственное производство, окраска по RAL.",
};

export default function VentilationPage() {
    return <VentilationClient />;
}
