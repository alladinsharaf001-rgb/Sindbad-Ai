"use client";

import Link from "next/link";
import { Anchor, Sparkles, ArrowRight, Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <nav className="border-b border-blue-800/30 backdrop-blur bg-slate-950/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Sindbad AI
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-blue-200 hover:text-white">Войти</Link>
            <Link href="/register" className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 font-semibold">Начать</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-200">Новое: GPT-4 доступен всем</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Твой ИИ-помощник<br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            для любых задач
          </span>
        </h1>
        <p className="text-xl text-blue-200/80 mb-10 max-w-3xl mx-auto">
          Пиши, программируй, учись, создавай — Sindbad AI поможет во всём.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/register" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 font-semibold text-lg flex items-center justify-center gap-2">
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/chat" className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-800/50 font-semibold text-lg">
            Попробовать демо
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-blue-300/70">
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" />Без карты</div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" />7 дней бесплатно</div>
        </div>
      </section>

      <footer className="border-t border-blue-800/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="text-sm text-blue-300/70">© 2025 Sindbad AI. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
