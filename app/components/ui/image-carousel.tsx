'use client';
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
    id: number;
    imgUrl: string;
    alt?: string;
}

interface ImageCarouselProps {
    data: CarouselItem[];
    cardsPerView?: number;
}

const ImageCarousel = ({ data, cardsPerView = 3 }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    if (!data || data.length === 0) {
        return null;
    }

    const cardWidth = 75 / cardsPerView;
    const canNavigate = data.length > cardsPerView;

    const nextSlide = () => {
        if (isAnimating || !canNavigate) return;

        setIsAnimating(true);
        const nextIndex = (currentIndex + 1) % data.length;

        if (containerRef.current) {
            containerRef.current.style.transition = "transform 500ms ease";
            containerRef.current.style.transform = `translateX(-${cardWidth}%)`;

            setTimeout(() => {
                setCurrentIndex(nextIndex);
                if (containerRef.current) {
                    containerRef.current.style.transition = "none";
                    containerRef.current.style.transform = "translateX(0)";
                    void containerRef.current.offsetWidth;
                    setIsAnimating(false);
                }
            }, 500);
        }
    };

    const prevSlide = () => {
        if (isAnimating || !canNavigate) return;

        setIsAnimating(true);
        const prevIndex = (currentIndex - 1 + data.length) % data.length;

        if (containerRef.current) {
            containerRef.current.style.transition = "none";
            containerRef.current.style.transform = `translateX(-${cardWidth}%)`;
            setCurrentIndex(prevIndex);
            void containerRef.current.offsetWidth;
            containerRef.current.style.transition = "transform 500ms ease";
            containerRef.current.style.transform = "translateX(0)";

            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };

    const getVisibleCards = () => {
        const visibleCards = [];
        const totalCards = data.length;

        for (let i = 0; i < cardsPerView + 1; i++) {
            const index = (currentIndex + i) % totalCards;
            visibleCards.push(data[index]);
        }

        return visibleCards;
    };

    return (
        <div className="w-full">
            <div className="relative">
                {/* Navigation Buttons */}
                {canNavigate && (
                    <>
                        <button
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-white p-3 rounded-full hover:bg-primary transition-all duration-300 disabled:opacity-50 -translate-x-1/2 shadow-lg"
                            aria-label="Предыдущее изображение"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={isAnimating}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-white p-3 rounded-full hover:bg-primary transition-all duration-300 disabled:opacity-50 translate-x-1/2 shadow-lg"
                            aria-label="Следующее изображение"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Cards Container */}
                <div className="overflow-hidden rounded-2xl">
                    <div
                        ref={containerRef}
                        className="flex"
                        style={{
                            transform: "translateX(0)",
                            width: `${(cardsPerView + 1) * 100 / cardsPerView}%`
                        }}
                    >
                        {getVisibleCards().map((card, idx) => (
                            <div
                                key={`card-${currentIndex}-${idx}`}
                                style={{
                                    width: `${100 / (cardsPerView + 1)}%`
                                }}
                                className="px-2"
                            >
                                <div className="overflow-hidden rounded-2xl shadow-md h-72">
                                    <img
                                        src={card.imgUrl}
                                        alt={card.alt || `Изображение ${card.id}`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
