import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SINDBAD AI — AI-автоматизация оптовой торговли с Китаем",
  description:
    "Поиск товаров в Китае, логистика в РФ, AI-карточки для Ozon и Wildberries. Оптовая торговля под управлением искусственного интеллекта.",
  keywords: [
    "SINDBAD AI",
    "оптовая торговля Китай",
    "AI автоматизация",
    "карточки Ozon",
    "карточки Wildberries",
    "поставщики Китай",
    "1688",
    "Alibaba",
    "логистика Китай Россия",
  ],
  openGraph: {
    title: "SINDBAD AI — Оптовая торговля с Китаем через AI",
    description:
      "Автоматизация закупок, логистики и продаж на маркетплейсах с помощью искусственного интеллекта.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}