import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    { id: 1, quote: "Excelente atendimento, equipe muito atenciosa e resolveram meu problema trabalhista com muita rapidez.", name: "Ricardo Oliveira", role: "Empresário" },
    { id: 2, quote: "Profissionais extremamente competentes. Fui muito bem orientada no meu processo de divórcio.", name: "Marina Santos", role: "Arquiteta" },
    { id: 3, quote: "Escritório de confiança. Transparência em todas as etapas e suporte constante. Recomendo muito!", name: "Carlos Ferreira", role: "Comerciante" },
    { id: 4, quote: "A precisão técnica e o cuidado humano da Dra. Rafaela foram fundamentais para o sucesso do meu caso.", name: "Luciana Almeida", role: "Servidora Pública" },
    { id: 5, quote: "O Dr. Rafael conduziu nosso processo com maestria e ética impecável. Um escritório nota dez.", name: "André Machado", role: "Gestor Comercial" },
];

const getVisibleCount = (width: number): number => {
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
};

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        autoPlayRef.current = setInterval(() => {
            const visibleCount = getVisibleCount(windowWidth);
            const maxIndex = testimonials.length - visibleCount;

            if (currentIndex >= maxIndex) {
                setDirection(-1);
                setCurrentIndex((prev) => prev - 1);
            } else if (currentIndex <= 0) {
                setDirection(1);
                setCurrentIndex((prev) => prev + 1);
            } else {
                setCurrentIndex((prev) => prev + direction);
            }
        }, 5000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, currentIndex, windowWidth, direction]);

    const visibleCount = getVisibleCount(windowWidth);
    const maxIndex = testimonials.length - visibleCount;
    const canGoNext = currentIndex < maxIndex;
    const canGoPrev = currentIndex > 0;

    const goNext = () => {
        if (canGoNext) {
            setDirection(1);
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
            pauseAutoPlay();
        }
    };

    const goPrev = () => {
        if (canGoPrev) {
            setDirection(-1);
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
            pauseAutoPlay();
        }
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        pauseAutoPlay();
    };

    return (
        <div className="relative">
            <div className="flex justify-center md:justify-end gap-3 mb-8">
                <button
                    onClick={goPrev}
                    disabled={!canGoPrev}
                    className={`p-3 rounded-full transition-all ${canGoPrev
                        ? 'bg-white shadow-md hover:bg-primary/10 text-primary'
                        : 'bg-bg-dark/5 text-bg-dark/20 cursor-not-allowed'
                        }`}
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={goNext}
                    disabled={!canGoNext}
                    className={`p-3 rounded-full transition-all ${canGoNext
                        ? 'bg-white shadow-md hover:bg-primary/10 text-primary'
                        : 'bg-bg-dark/5 text-bg-dark/20 cursor-not-allowed'
                        }`}
                    aria-label="Next"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`flex-shrink-0 px-3 w-full ${visibleCount === 3 ? 'lg:w-1/3' :
                                visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                                }`}
                        >
                            <div className="h-full border border-primary/10 bg-bg-light/40 p-10 pt-14 backdrop-blur-md shadow-sm relative group hover:bg-white/60 transition-colors duration-500">
                                <div className="absolute top-6 left-6 opacity-5 text-primary group-hover:scale-110 transition-transform">
                                    <Quote className="w-10 h-10 fill-primary" />
                                </div>

                                <div className="flex gap-1 mb-4 text-yellow-500 relative z-10">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>

                                <p className="text-lg leading-relaxed text-ink/80 font-medium italic mb-10 relative z-10">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="h-[2px] w-8 bg-primary/40"></div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-[10px] text-ink">{testimonial.name}</h4>
                                        <p className="text-[9px] font-bold text-ink/40 uppercase tracking-tighter">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-12 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative h-4 w-4"
                        aria-label={`Slide ${index + 1}`}
                    >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-primary scale-125'
                            : 'bg-primary/20 group-hover:bg-primary/40'
                            }`} />
                        {index === currentIndex && (
                            <motion.div
                                layoutId="activeDot"
                                className="absolute inset-0 rounded-full border border-primary/40"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
