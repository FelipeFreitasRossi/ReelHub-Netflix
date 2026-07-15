// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/src/context/FavoritesContext";
import { SearchProvider } from "@/src/context/SearchContext";
import { AuthProvider } from "@/src/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReelHub - Streaming",
  description: "Plataforma de streaming ReelHub",
  icons: {
    icon: "https://i.postimg.cc/W44tXPj2/Reel-Hub-8-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <FavoritesProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}