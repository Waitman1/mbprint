import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PlayfairDisplay = localFont({
  src: "../public/fonts/PlayfairDisplay-Regular.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});
const PlayfairDisplaySemiBold = localFont({
  src: "../public/fonts/PlayfairDisplay-SemiBold.ttf",
  variable: "--font-playfair-display-semibold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MB PRINT: больше чем типография",
  description:
    "Эксклюзивные печатные материалы для бизнеса и индивидуальный подход к каждому проекту. Всегда готовы помочь решить Ваши задачи и ответить на Ваши вопросы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru_RU">
      <body
        className={`${PlayfairDisplay.variable} ${PlayfairDisplaySemiBold.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
