import { Inter } from "next/font/google"
import "./globals.css"

import 'katex/dist/katex.min.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Simulador de Ondas Mecánicas",
  description: "Simulador interactivo de ondas mecánicas y sus propiedades",
}

// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <main className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Simulador de Ondas Mecánicas
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}