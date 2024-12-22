import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MontserratLight = localFont({
  src: "../public/fonts/Montserrat-Light.ttf",
  variable: "--font-montserrat-light",
  weight: "100 900",
});
const MontserratSemiBold = localFont({
  src: "../public/fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat-semibold",
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
        className={`${MontserratLight.variable} ${MontserratSemiBold.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
