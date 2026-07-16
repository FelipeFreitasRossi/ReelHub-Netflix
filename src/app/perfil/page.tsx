// src/app/perfil/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { User, Mail, Save, ArrowLeft, Camera, Check } from "lucide-react";

const avatarOptions = [
  {
    id: "perfil1",
    name: "Perfil 1",
    image: "https://i.postimg.cc/D093Bxk1/Gemini-Generated-Image-u9l20zu9l20zu9l2.png",
    character: "Avatar 1",
  },
  {
    id: "perfil2",
    name: "Perfil 2",
    image: "https://i.postimg.cc/RCymSZ6f/Gemini-Generated-Image-okwv84okwv84okwv.png",
    character: "Avatar 2",
  },
  {
    id: "perfil3",
    name: "Perfil 3",
    image: "https://i.postimg.cc/jSQY468J/Gemini-Generated-Image-20i41720i41720i4.png",
    character: "Avatar 3",
  },
  {
    id: "perfil4",
    name: "Perfil 4",
    image: "https://i.postimg.cc/v8gBLj5x/Gemini-Generated-Image-cfx7bwcfx7bwcfx7.png",
    character: "Avatar 4",
  },
];

const getFallbackAvatar = (name: string) => {
  const initials = name.split(" ").map(n => n[0]).join("");
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random&color=fff&size=128&bold=true`;
};

export default function PerfilPage() {
  const { user, updateUser, setAvatar } = useAuth();
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || "");

  // Sincroniza os campos com o usuário atual
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setSelectedAvatar(user.avatar || "");
    }
  }, [user]);

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Atualiza nome e email no contexto
      updateUser({ name, email });

      // Atualiza avatar se selecionado e diferente do atual
      if (selectedAvatar && selectedAvatar !== user.avatar) {
        setAvatar(selectedAvatar);
      }

      // Aguarda um pequeno delay para garantir a atualização do estado
      await new Promise(resolve => setTimeout(resolve, 300));

      setSuccess(true);
    } catch (error) {
      console.error("Erro ao salvar:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const handleAvatarSelect = (image: string) => {
    setSelectedAvatar(image);
    setAvatar(image); // salva imediatamente
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />

      <main className="flex-1 px-4 pt-24 pb-12 max-w-4xl mx-auto w-full">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="text-gray-400 hover:text-white transition"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold">Editar Perfil</h1>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-bold text-sm transition disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>

        {/* Seção de avatar */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Camera size={20} className="text-red-500" />
            Escolha sua foto de perfil
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {avatarOptions.map((avatar) => {
              const isSelected = selectedAvatar === avatar.image;
              return (
                <button
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar.image)}
                  className="relative flex flex-col items-center gap-2 p-2 rounded-lg transition-all hover:scale-105"
                >
                  <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 transition-all ${
                    isSelected ? "border-red-500 ring-4 ring-red-500" : "border-gray-600 hover:border-gray-400"
                  }`}>
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getFallbackAvatar(avatar.name);
                      }}
                    />
                    {isSelected && (
                      <div className="absolute bottom-1 right-1 bg-red-500 rounded-full p-1 border-2 border-black">
                        <Check size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{avatar.character}</span>
                </button>
              );
            })}
          </div>

          {/* Avatar atual */}
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400 border-t border-gray-700 pt-4">
            <span>Avatar atual:</span>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getFallbackAvatar(user.name);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Formulário de edição */}
        <form onSubmit={handleSubmit} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold">Informações pessoais</h2>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-red-500 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:border-red-500 transition"
                required
              />
            </div>
          </div>

          {success && (
            <p className="text-green-500 text-sm text-center">Perfil atualizado com sucesso!</p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}