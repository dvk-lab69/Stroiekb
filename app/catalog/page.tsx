import { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
    title: "Каталог МАФ — Скамейки, урны, велопарковки от производителя",
    description: "Полный каталог малых архитектурных форм от StroiEkb. Скамейки, урны, велопарковки, вазоны. Собственное производство, цены от производителя.",
};

export default function CatalogPage() {
    return <CatalogClient />;
}
