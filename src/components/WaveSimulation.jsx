"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WaveSimulation = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const [amplitude, setAmplitude] = useState(50);
  const [wavelength, setWavelength] = useState(200);
  const [frequency, setFrequency] = useState(1);
  
  const width = 800;
  const height = 400;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setTime(t => (t + 0.05) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(timer);
  }, [mounted]);

  const points = mounted ? Array.from({ length: width }, (_, x) => {
    const k = 2 * Math.PI / wavelength;
    const omega = 2 * Math.PI * frequency;
    const y = height/2 + amplitude * Math.sin(k * x - omega * time);
    return `${x},${y}`;
  }).join(' ') : `0,${height/2} ${width},${height/2}`;

  return (
    <div className="p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Simulación de Onda Viajera</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Área de visualización de la onda */}
          <svg width={width} height={height} className="bg-gray-50 mb-4">
            {/* Eje x */}
            <line 
              x1="0" y1={height/2} 
              x2={width} y2={height/2} 
              stroke="gray" 
              strokeDasharray="4"
            />
            
            {/* Onda */}
            <polyline
              points={points}
              fill="none"
              stroke="blue"
              strokeWidth="2"
            />
          </svg>

          {/* Controles */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Amplitud: {amplitude} unidades
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Longitud de onda: {wavelength} unidades
              </label>
              <input
                type="range"
                min="50"
                max="400"
                value={wavelength}
                onChange={(e) => setWavelength(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Frecuencia: {frequency} Hz
              </label>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-4 text-sm text-gray-600">
            <p>• Velocidad de onda: {(frequency * wavelength).toFixed(1)} unidades/s</p>
            <p>• Número de onda (k): {(2 * Math.PI / wavelength).toFixed(3)} rad/unidad</p>
            <p>• Frecuencia angular (ω): {(2 * Math.PI * frequency).toFixed(3)} rad/s</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaveSimulation;