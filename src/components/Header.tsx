// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  User,
  LogOut,
  Settings,
  Heart,
  Menu,
  X,
  Home,
  Film,
  Tv,
  List,
  LogIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSearch } from "@/src/context/SearchContext";
import { useAuth } from "@/src/context/AuthContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { setSearchTerm, clearSearch } = useSearch();
  const { user, logout } = useAuth();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    clearSearch();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery.trim());
      setIsSearchOpen(false);
      setSearchQuery("");
      if (pathname !== "/") {
        router.push("/");
      }
    }
  };

  const handleClearSearch = () => {
    clearSearch();
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isSearchOpen) handleClearSearch();
        setIsSidebarOpen(false);
        setIsProfileOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const navLinks = [
    { href: "/", label: "Início", icon: Home },
    { href: "/series", label: "Séries", icon: Tv },
    { href: "/filmes", label: "Filmes", icon: Film },
    { href: "/minha-lista", label: "Minha Lista", icon: List },
  ];

  const LOGO_URL = "https://i.postimg.cc/W44tXPj2/Reel-Hub-8-removebg-preview.png";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-black/95 shadow-lg"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-3 md:px-12 py-3 md:py-4">
          {/* ===== ESQUERDA ===== */}
          <div className="flex items-center gap-2 md:gap-6 min-w-0 flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-white hover:text-gray-300 transition flex-shrink-0"
              aria-label="Abrir menu"
            >
              <Menu size={26} />
            </button>

            <Link href="/" onClick={goHome} className="flex-shrink-0">
              <div className="relative w-[120px] sm:w-[140px] md:w-[180px] h-[40px] md:h-[55px]">
                <Image
                  src={LOGO_URL}
                  alt="ReelHub"
                  fill
                  className="object-contain"
                  priority
                  unoptimized={true}
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-light ml-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={link.href === "/" ? goHome : undefined}
                    className={`cursor-pointer transition whitespace-nowrap ${
                      isActive
                        ? "font-bold text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ===== DIREITA ===== */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Busca */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white transition p-1"
                aria-label="Buscar"
              >
                <Search size={20} />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "180px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSearchSubmit}
                    className="flex items-center ml-2"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar filmes e séries..."
                      className="w-full bg-black/60 border border-gray-600 rounded-md px-3 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white"
                      autoFocus
                    />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Link "Entrar" / "Sair" */}
            {user ? (
              <button
                onClick={logout}
                className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition text-sm font-medium"
              >
                <LogOut size={18} />
                Sair
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition text-sm font-medium"
              >
                <LogIn size={18} />
                Entrar
              </Link>
            )}

            {/* Perfil */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition"
                aria-label="Perfil"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden text-xl">
                  {user?.avatar ? (
                    <span>{user.avatar}</span>
                  ) : (
                    <User size={16} className="text-white" />
                  )}
                </div>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-48 bg-black/95 border border-gray-700 rounded-md shadow-2xl py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-lg">
                          {user?.avatar ? <span>{user.avatar}</span> : <User size={14} className="text-white" />}
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">{user?.name || "Usuário"}</p>
                          <p className="text-xs text-gray-400">{user?.email || "usuario@email.com"}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-300">
                      <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer transition">
                        <User size={16} /> Meu Perfil
                      </li>
                      <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer transition">
                        <Heart size={16} /> Minha Lista
                      </li>
                      <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer transition">
                        <Settings size={16} /> Configurações
                      </li>
                      {user && (
                        <li
                          onClick={() => {
                            logout();
                            setIsProfileOpen(false);
                            router.push("/login");
                          }}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer transition border-t border-gray-700 mt-1 pt-2 text-red-500"
                        >
                          <LogOut size={16} /> Sair
                        </li>
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ===== SIDEBAR ===== */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-50 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-64 bg-black/95 border-r border-gray-800 z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="relative w-[100px] h-[35px]">
                  <Image
                    src={LOGO_URL}
                    alt="ReelHub"
                    fill
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Fechar menu"
                >
                  <X size={26} />
                </button>
              </div>
              <nav className="flex-1 py-4">
                <ul className="space-y-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href === "/") goHome(e);
                            else setIsSidebarOpen(false);
                          }}
                          className={`flex items-center gap-4 px-4 py-3 text-base transition ${
                            isActive
                              ? "bg-red-600/20 text-white font-bold border-r-4 border-red-600"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={isActive ? "text-red-500" : "text-gray-400"}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  {/* Link Entrar/Sair na sidebar */}
                  {user ? (
                    <li>
                      <button
                        onClick={() => {
                          logout();
                          setIsSidebarOpen(false);
                          router.push("/login");
                        }}
                        className="flex items-center gap-4 px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 transition w-full text-left"
                      >
                        <LogOut size={20} className="text-gray-400" />
                        Sair
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href="/login"
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center gap-4 px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 transition"
                      >
                        <LogIn size={20} className="text-gray-400" />
                        Entrar
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div className="border-t border-gray-800 p-4 text-xs text-gray-500">
                <p>© 2026 ReelHub v1.0</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}