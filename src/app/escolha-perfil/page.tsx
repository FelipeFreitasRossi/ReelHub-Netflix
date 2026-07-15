// src/app/escolha-perfil/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

const avatars = [
  { id: "avatar1", name: "Herói", icon: "🦸", color: "bg-blue-600" },
  { id: "avatar2", name: "Aventureiro", icon: "🧭", color: "bg-green-600" },
  { id: "avatar3", name: "Mago", icon: "🧙", color: "bg-purple-600" },
  { id: "avatar4", name: "Cientista", icon: "🔬", color: "bg-cyan-600" },
  { id: "avatar5", name: "Ninja", icon: "🥷", color: "bg-gray-700" },
  { id: "avatar6", name: "Pirata", icon: "🏴‍☠️", color: "bg-red-800" },
  { id: "avatar7", name: "Robô", icon: "🤖", color: "bg-slate-600" },
  { id: "avatar8", name: "Princesa", icon: "👸", color: "bg-pink-600" },
  { id: "avatar9", name: "Detetive", icon: "🕵️", color: "bg-amber-700" },
  { id: "avatar10", name: "Astronauta", icon: "👨‍🚀", color: "bg-indigo-600" },
  { id: "avatar11", name: "Zumbi", icon: "🧟", color: "bg-green-800" },
  { id: "avatar12", name: "Vampiro", icon: "🧛", color: "bg-red-900" },
  { id: "avatar13", name: "Fada", icon: "🧚", color: "bg-purple-400" },
  { id: "avatar14", name: "Samurai", icon: "⚔️", color: "bg-rose-800" },
  { id: "avatar15", name: "Explorador", icon: "🗺️", color: "bg-emerald-700" },
  { id: "avatar16", name: "Mestre", icon: "🧘", color: "bg-orange-600" },
];

export default function EscolhaPerfilPage() {
  const { user, setAvatar } = useAuth();
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleSelect = (avatarId: string) => {
    setSelected(avatarId);
  };

  const handleConfirm = () => {
    if (selected) {
      const avatar = avatars.find((a) => a.id === selected);
      if (avatar) {
        setAvatar(avatar.icon);
        router.push("/");
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
            Escolha seu perfil
          </h1>
          <p className="text-gray-400 text-center text-sm sm:text-base mb-6">
            Selecione um avatar para personalizar sua conta, {user.name}.
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4">
            {avatars.map((avatar) => {
              const isSelected = selected === avatar.id;
              return (
                <motion.button
                  key={avatar.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(avatar.id)}
                  className={`relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                    isSelected ? "ring-4 ring-red-500 bg-gray-800/80" : "hover:bg-gray-800/40"
                  }`}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl ${avatar.color} transition-transform`}
                  >
                    {avatar.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 truncate w-full text-center">
                    {avatar.name}
                  </span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-red-500 rounded-full p-0.5"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleConfirm}
              disabled={!selected}
              className={`px-8 py-2 rounded-full font-bold text-white transition ${
                selected ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 cursor-not-allowed opacity-50"
              }`}
            >
              Continuar
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Você pode alterar seu avatar a qualquer momento nas configurações.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}