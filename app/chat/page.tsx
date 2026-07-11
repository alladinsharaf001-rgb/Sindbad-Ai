"use client";

import Link from "next/link";
import { Anchor, Sparkles, Zap, Shield, MessageSquare, ArrowRight, Check, Star } from "lucide-react";

export default function HomePage() {
  const features = [
    { icon: Sparkles, title: "Умные ответы", description: "ИИ понимает контекст и даёт точные ответы" },
    { icon: Zap, title: "Молниеносно быстро", description: "Мгновенные ответы благодаря технологиям" },
    { icon: Shield, title: "Безопасно", description: "Твои данные защищены надёжно" },
    { icon: MessageSquare, title: "Естественный диалог", description: "Общайся как с другом" },
  ];

  const plans = [
    {
      name: "Free",
      price: "0₽",
      period: "навсегда",
      features: ["20 сообщений в день", "Базовая модель", "Email поддержка"],
      cta: "Начать бесплатно",
      popular: false,
    },
    {
      name: "Pro",
      price: "990₽",
      period: "в месяц",
      features: ["Безлимитные сообщения", "GPT-4, Claude 3", "Генерация изображений", "Приоритетная поддержка"],
      cta: "Попробовать Pro",
      popular: true,
    },
    {
      name: "Team",
      price: "2990₽",
      period: "в месяц",
      features: ["Всё из Pro", "До 5 пользователей", "API доступ", "Личный менеджер"],
      cta: "Связаться с нами",
      popular: false,
    },
  ];

  const testimonials = [
    { name: "Анна К.", role: "Маркетолог", text: "Sindbad AI помог сгенерировать 50 идей за 10 минут!" },
    { name: "Дмитрий В.", role: "Разработчик", text: "Использую каждый день для дебага кода." },
    { name: "Мария Л.", role: "Студентка", text: "Помогает с учёбой лучше любого репетитора." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      <nav className="relative z-50 border-b border-blue-800/30 backdrop-blur bg-slate-950/50 sticky top-0">
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
            <Link href="/login" className="px-4 py-2 text-blue-200 hover:text-white transition">
              Войти
            </Link>
            <Link href="/register" className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold">
              Начать
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-200">Новое: GPT-4 доступен всем</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Твой ИИ-помощник<br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            для любых задач
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-200/80 mb-10 max-w-3xl mx-auto">
          Пиши, программируй, учись, создавай — Sindbad AI поможет во всём.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/register" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold text-lg flex items-center justify-center gap-2">
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/chat" className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-blue-800/50 transition font-semibold text-lg">
            Попробовать демо
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-blue-300/70">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-cyan-400" />
            Без карты
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-cyan-400" />
            7 дней бесплатно
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Всё что нужно — <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">в одном месте</span>
          </h2>
          <p className="text-xl text-blue-200/70">Мощные функции для твоей продуктивности</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/30 hover:border-cyan-500/50 backdrop-blur transition group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-200/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Простые <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">цены</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-2xl backdrop-blur transition ${plan.popular ? "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-2 border-cyan-500/50 scale-105" : "bg-blue-950/40 border border-blue-800/30"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-semibold">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-blue-200/70 ml-2">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-blue-100">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className={`block text-center py-3 rounded-xl font-semibold transition ${plan.popular ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400" : "bg-white/10 hover:bg-white/20 border border-blue-800/50"}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">пользователей</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/30 backdrop-blur">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-blue-100 mb-4">{t.text}</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-blue-300/70">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 backdrop-blur text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Готов начать путешествие?
          </h2>
          <p className="text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам людей, которые используют Sindbad AI
          </p>
          <Link href="/register" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition font-semibold text-lg">
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-blue-800/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="text-sm text-blue-300/70">
            © 2025 Sindbad AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}