// src/components/Footer.tsx
"use client";

import {
  Github,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  HelpCircle,
  Shield,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="bg-black/90 border-t border-gray-800 mt-16 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-800">
          <div className="flex gap-6 text-gray-400">
            <Github
              size={24}
              className="cursor-pointer hover:text-white transition-transform hover:scale-110"
            />
            <Twitter
              size={24}
              className="cursor-pointer hover:text-white transition-transform hover:scale-110"
            />
            <Youtube
              size={24}
              className="cursor-pointer hover:text-white transition-transform hover:scale-110"
            />
            <Instagram
              size={24}
              className="cursor-pointer hover:text-white transition-transform hover:scale-110"
            />
            <Mail
              size={24}
              className="cursor-pointer hover:text-white transition-transform hover:scale-110"
            />
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>Feito com dedicação</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 text-sm text-gray-400">
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={goHome} className="hover:text-white hover:underline transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:text-white hover:underline transition">
                  Séries
                </Link>
              </li>
              <li>
                <Link href="/filmes" className="hover:text-white hover:underline transition">
                  Filmes
                </Link>
              </li>
              <li>
                <Link href="/minha-lista" className="hover:text-white hover:underline transition">
                  Minha Lista
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Ajuda</h4>
            <ul className="space-y-2">
              <li className="hover:text-white hover:underline cursor-pointer transition">Central de Ajuda</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Termos de Uso</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Privacidade</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Cookies</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Conta</h4>
            <ul className="space-y-2">
              <li className="hover:text-white hover:underline cursor-pointer transition">Minha Conta</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Minha Lista</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Assinatura</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Histórico</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">Sobre</h4>
            <ul className="space-y-2">
              <li className="hover:text-white hover:underline cursor-pointer transition">Sobre Nós</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Carreiras</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Imprensa</li>
              <li className="hover:text-white hover:underline cursor-pointer transition">Contato</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© 2026 ReelHub. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield size={14} /> Seguro</span>
            <span className="flex items-center gap-1"><HelpCircle size={14} /> Suporte</span>
            <span className="flex items-center gap-1"><Heart size={14} className="text-red-500" /> Versão 1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}