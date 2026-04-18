import { Metadata } from "next";
import BasketsClient from "./BasketsClient";

export const metadata: Metadata = {
    title: "Корзины для кондиционеров на фасад — Купить в Екатеринбурге",
    description: "Защитные корзины для наружных блоков кондиционеров. Любые размеры, покраска по RAL, защита от осадков и вандализма. Собственное производство.",
};

export default function BasketsPage() {
    return <BasketsClient />;
}
