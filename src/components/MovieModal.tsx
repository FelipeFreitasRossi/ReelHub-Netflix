// src/components/MovieModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Info, Star, Calendar, Tag, Tv, Film, Heart } from "lucide-react";
import { Movie } from "@/src/lib/mock-data";
import { useFavorites } from "@/src/context/FavoritesContext";

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onWatch: () => void;
  onTrailer: () => void;
}

export function MovieModal({ movie, isOpen, onClose, onWatch, onTrailer }: MovieModalProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  if (!movie) return null;

  const isFav = isFavorite(movie.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative h-64 md:h-80 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${movie.backdrop})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-t-xl" />

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition z-10"
                  aria-label="Fechar"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {movie.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-200">
                    <span className="flex items-center gap-1">
                      {movie.type === "Série" ? <Tv size={16} /> : <Film size={16} />}
                      {movie.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {movie.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400" />
                      {movie.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={16} />
                      {movie.genre}
                    </span>
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      {movie.maturity === "L" ? "LIVRE" : `${movie.maturity}+`}
                    </span>
                    {movie.seasons && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                        {movie.seasons}ª Temporada
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Sinopse</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">
                    {movie.description}
                  </p>
                </div>

                {/* Botões de ação */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={onWatch}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition shadow-lg"
                  >
                    <Play size={18} fill="white" /> Assistir
                  </button>
                  <button
                    onClick={onTrailer}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition"
                  >
                    <Play size={18} /> Trailer
                  </button>
                  <button
                    onClick={() => toggleFavorite(movie)}
                    className={`flex items-center gap-2 font-bold py-2 px-6 rounded-full transition ${
                      isFav
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    <Heart
                      size={18}
                      className={isFav ? "fill-white" : ""}
                    />
                    {isFav ? "Remover da lista" : "Salvar na lista"}
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition"
                  >
                    <X size={18} /> Fechar
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 border-t border-gray-700 pt-4">
                  <div>
                    <span className="font-semibold text-gray-300">Gênero:</span> {movie.genre}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">Classificação:</span>{" "}
                    {movie.maturity === "L" ? "Livre" : `${movie.maturity}+`}
                  </div>
                  {movie.seasons && (
                    <div>
                      <span className="font-semibold text-gray-300">Temporadas:</span> {movie.seasons}
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-gray-300">Tipo:</span> {movie.type}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}