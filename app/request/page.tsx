import { Metadata } from "next";
import RequestClient from "./RequestClient";

export const metadata: Metadata = {
    title: "Оставить заявку на расчет — StroiEkb",
    description: "Закажите расчет стоимости МАФ, вентиляции или корзин для кондиционеров. Оперативный ответ в течение 15 минут.",
};

export default function RequestPage() {
    return <RequestClient />;
}
