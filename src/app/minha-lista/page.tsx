// src/app/minha-lista/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/src/context/FavoritesContext";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { MovieCard } from "@/src/components/MovieCard";
import { MovieModal } from "@/src/components/MovieModal";
import { Movie } from "@/src/lib/mock-data";
import { Heart, Film, Tv, ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";

export default function MinhaListaPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleWatch = () => {
    alert(`Assistir: ${selectedMovie?.title}`);
  };

  const handleTrailer = () => {
    alert(`Trailer de: ${selectedMovie?.title}`);
  };

  // Contagem de filmes e séries
  const movieCount = favorites.filter((m) => m.type === "Filme").length;
  const seriesCount = favorites.filter((m) => m.type === "Série").length;

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <main className="pt-28 md:pt-32 px-4 md:px-12 pb-12">
        {/* ===== CABEÇALHO ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold flex items-center gap-3"
            >
              <Heart size={32} className="text-red-500 fill-red-500" />
              Minha Lista
            </motion.h1>
            {favorites.length > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm mt-1"
              >
                {favorites.length} {favorites.length === 1 ? "título salvo" : "títulos salvos"} •{" "}
                {movieCount > 0 && `${movieCount} filme${movieCount > 1 ? "s" : ""}`}
                {movieCount > 0 && seriesCount > 0 && " • "}
                {seriesCount > 0 && `${seriesCount} série${seriesCount > 1 ? "s" : ""}`}
              </motion.p>
            )}
          </div>
          {favorites.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                if (confirm("Tem certeza que deseja limpar toda a sua lista?")) {
                  favorites.forEach((m) => toggleFavorite(m));
                }
              }}
              className="text-sm text-gray-400 hover:text-red-500 transition flex items-center gap-2 border border-gray-700 hover:border-red-500 rounded-full px-4 py-2"
            >
              <Trash2 size={16} /> Limpar lista
            </motion.button>
          )}
        </div>

        {/* ===== CONTEÚDO ===== */}
        <AnimatePresence mode="wait">
          {favorites.length === 0 ? (
            // ---- LISTA VAZIA ----
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center h-[60vh] text-center"
            >
              <div className="bg-gray-900/50 rounded-full p-8 mb-6">
                <Heart size={64} className="text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Sua lista está vazia</h2>
              <p className="text-gray-400 max-w-md mt-2">
                Explore os filmes e séries e clique no <Heart size={14} className="inline text-red-500 fill-red-500" /> para adicioná-los aqui.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/filmes"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  <Film size={18} /> Explorar Filmes <ArrowRight size={16} />
                </Link>
                <Link
                  href="/series"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  <Tv size={18} /> Explorar Séries <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ) : (
            // ---- LISTA COM ITENS ----
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid responsivo com cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {favorites.map((movie, index) => (
                  <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <MovieCard movie={movie} onClick={handleMovieClick} />
                  </motion.div>
                ))}
              </div>

              {/* Rodapé com resumo */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2">
                <span>
                  <Heart size={14} className="inline text-red-500 fill-red-500 mr-1" />
                  {favorites.length} títulos salvos
                </span>
                <span className="flex gap-4">
                  <span>{movieCount} filmes</span>
                  <span>{seriesCount} séries</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWatch={handleWatch}
        onTrailer={handleTrailer}
      />
    </div>
  );
}