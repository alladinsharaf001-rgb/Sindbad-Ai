"use client";

import Link from "next/link";
import { Anchor, MessageSquare, Sparkles, TrendingUp, Clock, Zap } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { icon: MessageSquare, label: "Сообщений", value: "247", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, label: "Времени сэкономлено", value: "18ч", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, label: "Продуктивность", value: "+45%", color: "from-green-500 to-emerald-500" },
    { icon: Zap, label: "Активных проектов", value: "5", color: "from-orange-500 to-red-500" },
  ];

  const recentChats = [
    { title: "Идеи для маркетинга", time: "2 часа назад", messages: 12 },
    { title: "Помощь с кодом React", time: "5 часов назад", messages: 34 },
    { title: "Перевод статьи", time: "Вчера", messages: 8 },
    { title: "Бизнес-план", time: "2 дня назад", messages: 22 },
  ];

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

          <div className="flex items-center gap-4">
            <Link href="/chat" className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold">
              Новый чат
            </Link>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
              С
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Привет, Синдбад! 👋</h1>
          <p className="text-blue-200/70">Готов к новому путешествию?</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/30 backdrop-blur">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-blue-200/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/30 backdrop-blur">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Последние чаты</h2>
              <Link href="/chat" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Все чаты →
              </Link>
            </div>

            <div className="space-y-3">
              {recentChats.map((chat, i) => (
                <Link
                  key={i}
                  href="/chat"
                  className="block p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-blue-800/30 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{chat.title}</h3>
                    <span className="text-xs text-blue-300/50">{chat.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200/70">
                    <MessageSquare className="w-4 h-4" />
                    {chat.messages} сообщений
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 backdrop-blur">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Обнови до Pro</h2>
            <p className="text-blue-200/70 mb-6">
              Безлимитные сообщения, приоритетная поддержка и доступ ко всем моделям
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                Безлимитные запросы
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                GPT-4, Claude 3, Gemini Pro
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                Генерация изображений
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                Приоритетная поддержка
              </li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold">
              Обновить за 990₽/мес
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}