import Hero from "./components/Hero";
import Directions from "./components/Directions";



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StroiEkb — Производство МАФ и фасадных решений",
  description: "Производство малых архитектурных форм, парковой мебели, корзин для кондиционеров и вентиляционных решеток. Полный цикл, гарантия качества.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Directions />
    </>
  );
}
