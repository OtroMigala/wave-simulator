"use client"

import WavePhysicsLab from '@/components/WavePhysicsLab'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Simulador de Ondas Mecánicas
        </h1>
        <WavePhysicsLab />
      </div>
    </main>
  );
}