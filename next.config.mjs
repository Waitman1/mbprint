/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Указываем статическую генерацию
  basePath: "/mbprint", // Имя вашего репозитория
  assetPrefix: "/mbprint/",
  images: {
    unoptimized: true, // Отключаем Image Optimization для статического экспорта
  },
};

export default nextConfig;
