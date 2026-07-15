// src/app/series/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/src/lib/mock-data";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { MovieRow } from "@/src/components/MovieRow";
import { MovieModal } from "@/src/components/MovieModal";
import { Movie } from "@/src/lib/mock-data";
import { Play, Info } from "lucide-react";

export default function SeriesPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtra as categorias que contêm séries e mantém apenas os itens do tipo "Série"
  const seriesCategories = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((movie) => movie.type === "Série"),
    }))
    .filter((cat) => cat.items.length > 0);

  // Pega o primeiro item da primeira categoria para o banner
  const featuredSeries = seriesCategories.length > 0 ? seriesCategories[0].items[0] : null;

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

  if (!featuredSeries) {
    return (
      <div className="bg-black min-h-screen text-white">
        <Header />
        <main className="pt-24 px-4 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold">Séries</h1>
          <p className="text-gray-400 mt-4">Nenhuma série encontrada no momento.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen text-white overflow-x-hidden">
      <Header />

      {/* ===== BANNER HERO ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[85vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${featuredSeries.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-2xl px-4 md:px-12 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              {featuredSeries.type}
            </span>
            <span className="text-sm text-gray-300">{featuredSeries.year}</span>
            <span className="text-sm text-gray-300 flex items-center gap-1">
              ⭐ {featuredSeries.rating}
            </span>
            <span className="text-sm text-gray-300 border border-gray-500 px-1 rounded text-xs">
              {featuredSeries.maturity === "L" ? "LIVRE" : `${featuredSeries.maturity}+`}
            </span>
            {featuredSeries.seasons && (
              <span className="text-sm text-gray-300 bg-blue-600 px-2 py-0.5 rounded text-xs">
                {featuredSeries.seasons}ª Temp.
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {featuredSeries.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm md:text-base max-w-md text-gray-300"
          >
            {featuredSeries.description}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex gap-4"
          >
            <button
              onClick={() => {
                setSelectedMovie(featuredSeries);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-bold text-sm hover:bg-gray-200 transition shadow-lg"
            >
              <Play size={18} fill="black" /> Assistir
            </button>
            <button
              onClick={() => {
                setSelectedMovie(featuredSeries);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 bg-gray-600/70 text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-gray-600 transition backdrop-blur-sm"
            >
              <Info size={18} /> Mais Info
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== LINHAS DE SÉRIES POR CATEGORIA ===== */}
      <div className="relative z-20 -mt-28 space-y-10 pb-4">
        {seriesCategories.map((category) => (
          <MovieRow
            key={category.id}
            title={category.title}
            icon={category.icon}
            movies={category.items}
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

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