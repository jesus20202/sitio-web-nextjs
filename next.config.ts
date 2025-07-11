import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Permite que el build de producción se complete incluso con errores de TS
    ignoreBuildErrors: true,
  },
  eslint: {
    // Opcional: también ignora errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
}


export default nextConfig;
