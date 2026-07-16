// src/app/configuracoes/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import {
  ArrowLeft,
  Bell,
  Shield,
  Moon,
  Globe,
  Monitor,
  Smartphone,
  Volume2,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function ConfiguracoesPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt-BR");
  const [autoplay, setAutoplay] = useState(true);

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />
      <main className="flex-1 px-4 pt-24 pb-12 max-w-3xl mx-auto w-full">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
        >
          <ArrowLeft size={18} /> Voltar
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-gray-400 text-sm mb-6">Personalize sua experiência no ReelHub.</p>

        <div className="space-y-4">
          {/* Preferências de Conta */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">Conta</h2>
            <div className="space-y-3">
              <button
                onClick={() => router.push("/perfil")}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition"
              >
                <span>Editar perfil</span>
                <span className="text-gray-500">→</span>
              </button>
              <button
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
                className="flex items-center justify-between w-full text-left text-red-400 hover:text-red-300 transition"
              >
                <span>Sair da conta</span>
                <LogOut size={16} />
              </button>
            </div>
          </div>

          {/* Preferências de Reprodução */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">Reprodução</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Reprodução automática</span>
                <button
                  onClick={() => setAutoplay(!autoplay)}
                  className={`relative w-12 h-6 rounded-full transition ${autoplay ? "bg-red-600" : "bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      autoplay ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Qualidade preferida</span>
                <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:border-red-500">
                  <option>Automático</option>
                  <option>4K</option>
                  <option>Full HD</option>
                  <option>HD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">Notificações</h2>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Receber notificações</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative w-12 h-6 rounded-full transition ${notifications ? "bg-red-600" : "bg-gray-600"}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Preferências Gerais */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">Geral</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Idioma</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="pt-BR">Português (BR)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Español</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Modo escuro</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-12 h-6 rounded-full transition ${darkMode ? "bg-red-600" : "bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      darkMode ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Ajuda */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
            <h2 className="font-semibold text-lg mb-3">Ajuda</h2>
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition">
                <span>Central de ajuda</span>
                <span className="text-gray-500">→</span>
              </button>
              <button className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition">
                <span>Termos de uso</span>
                <span className="text-gray-500">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}