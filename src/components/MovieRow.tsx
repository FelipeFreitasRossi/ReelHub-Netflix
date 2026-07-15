// src/components/MovieRow.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { Movie } from "@/src/lib/mock-data";
import { MovieCard } from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MovieRowProps {
  title: string;
  icon: LucideIcon;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export function MovieRow({ title, icon: Icon, movies, onMovieClick }: MovieRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Atualiza a visibilidade das setas baseado na posição do scroll
  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    // Força atualização inicial
    setTimeout(updateArrows, 100);

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  // Função para rolar suavemente uma quantidade de cards (8 em desktop, ajustado dinamicamente)
  const scrollCards = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calcula a largura de um card + gap
    const firstCard = container.querySelector("[data-card]") as HTMLElement;
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 16; // 16px de gap

    // Número de cards por vez baseado na tela
    let cardsToScroll = 8;
    if (window.innerWidth < 640) cardsToScroll = 2;
    else if (window.innerWidth < 768) cardsToScroll = 3;
    else if (window.innerWidth < 1024) cardsToScroll = 5;
    else if (window.innerWidth < 1280) cardsToScroll = 6;

    const scrollAmount = cardWidth * cardsToScroll;

    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newScroll = direction === "right" ? currentScroll + scrollAmount : currentScroll - scrollAmount;

    // Loop infinito (suave)
    if (direction === "right" && newScroll >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      setTimeout(updateArrows, 300);
      return;
    }
    if (direction === "left" && newScroll <= 0) {
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
      setTimeout(updateArrows, 300);
      return;
    }

    container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  // Cria uma lista estendida para efeito de loop infinito (repetida 5 vezes)
  const extendedMovies = Array(5).fill(movies).flat();

  return (
    <div className="space-y-4 px-4 md:px-12">
      {/* Título com ícone */}
      <div className="flex items-center gap-2 text-white">
        <Icon size={22} className="text-red-500" />
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      </div>

      {/* Carrossel com scroll horizontal e setas */}
      <div className="relative group">
        {/* Seta Esquerda (visível apenas em desktop) */}
        {showLeftArrow && (
          <button
            onClick={() => scrollCards("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-r-md transition-all duration-200 backdrop-blur-sm shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Container rolável com snap scroll e toque suave */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {extendedMovies.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              data-card
              className="snap-start flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/8"
              style={{ maxWidth: "200px" }} // Limita o tamanho máximo para não ficar enorme
            >
              <MovieCard movie={movie} onClick={onMovieClick} />
            </div>
          ))}
        </div>

        {/* Seta Direita (visível apenas em desktop) */}
        {showRightArrow && (
          <button
            onClick={() => scrollCards("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-l-md transition-all duration-200 backdrop-blur-sm shadow-lg"
            aria-label="Próximo"
          >
            <ChevronRight size={36} />
          </button>
        )}
      </div>

      {/* Indicadores de página (mobile) */}
      <div className="flex justify-center gap-1 mt-2 md:hidden">
        {Array.from({ length: Math.ceil(extendedMovies.length / 8) }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === Math.floor((scrollContainerRef.current?.scrollLeft || 0) / (200 * 8))
                ? "w-4 bg-red-600"
                : "w-1.5 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}