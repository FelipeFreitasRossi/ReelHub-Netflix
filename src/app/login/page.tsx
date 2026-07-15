// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Github,
  Chrome,
} from "lucide-react";

export default function LoginPage() {
  const { login, register } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setTouched({});
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    if (field === "email") {
      if (!value) error = "E-mail é obrigatório";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "E-mail inválido";
    }
    if (field === "password") {
      if (!value) error = "Senha é obrigatória";
      else if (value.length < 6) error = "Senha deve ter no mínimo 6 caracteres";
    }
    if (field === "name" && !isLogin) {
      if (!value) error = "Nome é obrigatório";
      else if (value.length < 2) error = "Nome deve ter no mínimo 2 caracteres";
    }
    if (field === "confirmPassword" && !isLogin) {
      if (!value) error = "Confirme sua senha";
      else if (value !== password) error = "As senhas não coincidem";
    }
    return error;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, 
      field === "email" ? email :
      field === "password" ? password :
      field === "name" ? name :
      field === "confirmPassword" ? confirmPassword : ""
    );
    if (error) setErrors({ ...errors, [field]: error });
    else {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "name") setName(value);
    if (field === "confirmPassword") setConfirmPassword(value);
    if (touched[field]) {
      const error = validateField(field, value);
      if (error) setErrors({ ...errors, [field]: error });
      else {
        const newErrors = { ...errors };
        delete newErrors[field];
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const emailError = validateField("email", email);
    const passError = validateField("password", password);
    let nameError = "";
    let confirmError = "";
    if (!isLogin) {
      nameError = validateField("name", name);
      confirmError = validateField("confirmPassword", confirmPassword);
    }

    if (emailError || passError || nameError || confirmError) {
      const newErrors: { [key: string]: string } = {};
      if (emailError) newErrors.email = emailError;
      if (passError) newErrors.password = passError;
      if (nameError) newErrors.name = nameError;
      if (confirmError) newErrors.confirmPassword = confirmError;
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    let success = false;
    if (isLogin) {
      success = await login(email, password);
    } else {
      success = await register(name, email, password);
    }

    setLoading(false);

    if (success) {
      // 🔥 REDIRECIONAMENTO: login → home, cadastro → escolha de perfil
      if (isLogin) {
        router.push("/");
      } else {
        router.push("/escolha-perfil");
      }
    } else {
      setErrors({
        general: isLogin
          ? "E-mail ou senha incorretos. Tente novamente."
          : "Falha ao criar conta. Verifique seus dados.",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="w-full max-w-5xl bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* LADO ESQUERDO: IMAGEM */}
          <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative min-h-[450px] lg:min-h-[500px]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop&crop=center')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Bem-vindo ao ReelHub</h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Milhares de filmes, séries e documentários exclusivos. Assista onde e quando quiser.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3 text-gray-400 text-[10px] sm:text-xs">
                <CheckCircle size={14} className="text-red-500" /> Sem anúncios
                <CheckCircle size={14} className="text-red-500 ml-2 sm:ml-3" /> Qualidade 4K
                <CheckCircle size={14} className="text-red-500 ml-2 sm:ml-3" /> Multi-tela
              </div>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold">
                {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                {isLogin
                  ? "Faça login para continuar assistindo."
                  : "Comece sua jornada no ReelHub agora."}
              </p>
            </div>

            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-600/20 border border-red-600 text-red-400 text-xs sm:text-sm p-3 rounded-md mb-4 flex items-center gap-2"
              >
                <AlertCircle size={16} className="flex-shrink-0" /> 
                <span>{errors.general}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Nome completo
                    </label>
                    <div className={`relative rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-700'} transition`}>
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="Seu nome"
                        className="w-full bg-gray-800 rounded-md pl-10 pr-3 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  E-mail
                </label>
                <div className={`relative rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-700'} transition`}>
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="seu@email.com"
                    className="w-full bg-gray-800 rounded-md pl-10 pr-3 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Senha
                </label>
                <div className={`relative rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-700'} transition`}>
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}
                    placeholder="••••••••"
                    className="w-full bg-gray-800 rounded-md pl-10 pr-10 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>

              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Confirmar senha
                    </label>
                    <div className={`relative rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} transition`}>
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        onBlur={() => handleBlur("confirmPassword")}
                        placeholder="••••••••"
                        className="w-full bg-gray-800 rounded-md pl-10 pr-10 py-2 text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                  </motion.div>
                )}
              </AnimatePresence>

              {isLogin && (
                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0">
                  <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-red-600 w-4 h-4"
                    />
                    Lembrar-me
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Funcionalidade em desenvolvimento")}
                    className="text-sm text-red-500 hover:text-red-400 transition"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full py-2.5 rounded-md font-bold text-white transition flex items-center justify-center gap-2 text-base ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {isLogin ? "Entrar" : "Criar conta"}
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? (
                <>
                  Não tem uma conta?{" "}
                  <button
                    onClick={toggleMode}
                    className="text-red-500 hover:text-red-400 font-medium transition"
                  >
                    Criar conta
                  </button>
                </>
              ) : (
                <>
                  Já tem uma conta?{" "}
                  <button
                    onClick={toggleMode}
                    className="text-red-500 hover:text-red-400 font-medium transition"
                  >
                    Fazer login
                  </button>
                </>
              )}
            </div>

            <div className="relative flex items-center justify-center gap-4 mt-6">
              <div className="h-px flex-1 bg-gray-700" />
              <span className="text-xs text-gray-500">ou</span>
              <div className="h-px flex-1 bg-gray-700" />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition"
                aria-label="Login com Google"
              >
                <Chrome size={20} />
              </button>
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition"
                aria-label="Login com GitHub"
              >
                <Github size={20} />
              </button>
            </div>

            {!isLogin && (
              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                Ao criar uma conta, você concorda com nossos{" "}
                <button className="text-red-500 hover:underline">Termos de Uso</button> e{" "}
                <button className="text-red-500 hover:underline">Política de Privacidade</button>.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}