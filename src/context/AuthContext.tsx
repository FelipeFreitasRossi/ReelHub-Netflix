// src/context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setAvatar: (avatar: string) => void;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("reelhub_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("reelhub_user");
      }
    }
    setLoading(false);
  }, []);

  // Função centralizada para salvar usuário (estado + localStorage)
  const saveUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem("reelhub_user", JSON.stringify(newUser));
  };

  // Login
  const login = async (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          const newUser = {
            id: Math.random().toString(36).substring(7),
            name: email.split("@")[0],
            email: email,
            avatar: "",
          };
          saveUser(newUser);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  // Cadastro
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (name && email && password) {
          const newUser = {
            id: Math.random().toString(36).substring(7),
            name: name,
            email: email,
            avatar: "",
          };
          saveUser(newUser);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("reelhub_user");
  };

  // Atualizar avatar
  const setAvatar = (avatar: string) => {
    if (user) {
      const updatedUser = { ...user, avatar };
      saveUser(updatedUser);
    }
  };

  // Atualizar dados do usuário (nome, email, etc.)
  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      saveUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        setAvatar,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}