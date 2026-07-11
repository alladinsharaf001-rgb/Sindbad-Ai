"use client";

import Link from "next/link";
import { Anchor, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Вход:", { email, password });
    alert("Пока это заглушка. Подключим Supabase позже!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <Anchor className="w-7 h-7 text-white" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Sindbad AI
          </div>
        </Link>

        <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-800/30 backdrop-blur">
          <h1 className="text-3xl font-bold mb-2 text-center">С возвращением!</h1>
          <p className="text-blue-200/70 text-center mb-8">Войди в свой аккаунт</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-blue-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/50 border border-blue-800/50 focus:border-cyan-400 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-blue-200 mb-2">Пароль</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/50 border border-blue-800/50 focus:border-cyan-400 outline-none transition"
                />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300">
                Забыл пароль?
              </a>
            </div>

            <button
              type="submit"
              className="group w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold flex items-center justify-center gap-2"
            >
              Войти
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-blue-800/50" />
            <span className="text-sm text-blue-300/50">или</span>
            <div className="flex-1 h-px bg-blue-800/50" />
          </div>

          <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-800/50 transition font-semibold flex items-center justify-center gap-2">
            <span className="text-xl">G</span>
            Войти через Google
          </button>

          <p className="text-center text-blue-200/70 mt-6">
            Нет аккаунта?{" "}
            <Link href="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Зарегистрируйся
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}