// src/components/MovieCard.tsx
"use client";

import { motion } from "framer-motion";
import { Movie } from "@/src/lib/mock-data";
import { Star, Heart } from "lucide-react";
import { useFavorites } from "@/src/context/FavoritesContext";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  // Função para lidar com o clique no coração
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // IMPEDE que o clique no coração abra o modal
    toggleFavorite(movie);
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-full cursor-pointer rounded-md overflow-hidden group"
      whileHover={{
        scale: 1.05,
        zIndex: 10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onClick={() => onClick(movie)}
    >
      {/* ===== CAPA DO FILME ===== */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover rounded-md shadow-lg"
        loading="lazy"
      />

      {/* ===== ÍCONE DO CORAÇÃO (BOTÃO) ===== */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 rounded-full p-1.5 border border-white/20 transition-all z-20"
        aria-label={favorite ? "Remover da lista" : "Adicionar à lista"}
      >
        <Heart
          size={18}
          className={`transition-colors ${
            favorite ? "text-red-500 fill-red-500" : "text-white"
          }`}
        />
      </button>

      {/* ===== BADGE DE CLASSIFICAÇÃO ===== */}
      <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
        {movie.maturity === "L" ? "LIVRE" : `${movie.maturity}+`}
      </div>

      {/* ===== BADGE DE TIPO ===== */}
      <div className="absolute bottom-16 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
        {movie.type}
      </div>

      {/* ===== OVERLAY DO HOVER ===== */}
      <motion.div
        className="absolute inset-0 bg-black/80 flex flex-col justify-end p-3 opacity-0"
        whileHover={{ opacity: 1 }}
      >
        <h3 className="font-bold text-sm text-white">{movie.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center text-yellow-400 text-xs">
            <Star size={12} fill="currentColor" className="mr-1" />
            {movie.rating}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-300">{movie.year}</span>
          {movie.seasons && (
            <>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-300">{movie.seasons}ª Temp.</span>
            </>
          )}
        </div>
        <p className="text-[11px] text-gray-300 mt-1 line-clamp-2">{movie.genre}</p>
        <button className="mt-2 bg-white text-black text-xs font-bold py-1.5 px-4 rounded-full w-fit hover:bg-gray-200 transition">
          Detalhes
        </button>
      </motion.div>
    </motion.div>
  );
}