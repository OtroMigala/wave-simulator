// src/components/WavePhysicsLab/OscillatorSimulation.js
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const OscillatorSimulation = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  
  const [frequency, setFrequency] = useState(148);
  const [amplitude, setAmplitude] = useState(0.015); // 15mm convertido a metros
  const [tension, setTension] = useState(6.6);
  const [density, setDensity] = useState(0.017); // 17 g/m convertido a kg/m

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    // Calcular parámetros de la onda
    const waveSpeed = Math.sqrt(tension/density);
    const wavelength = waveSpeed/frequency;
    const k = 2 * Math.PI / wavelength;
    const omega = 2 * Math.PI * frequency;
    const power = 0.5 * density * Math.pow(omega, 2) * Math.pow(amplitude, 2) * waveSpeed;
    const energy = 0.5 * density * Math.pow(omega, 2) * Math.pow(amplitude, 2) * wavelength;

    const drawWave = (time) => {
      ctx.clearRect(0, 0, width, height);
      
      // Dibujar línea central
      ctx.strokeStyle = '#e5e7eb';
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Dibujar onda
      ctx.beginPath();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      
      for (let x = 0; x < width; x++) {
        const y = centerY + amplitude * 1000 * Math.sin(k * x - omega * time);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      timeRef.current += 0.001; // Reducido para una animación más suave
      drawWave(timeRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [frequency, amplitude, tension, density]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulación de Oscilador</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Canvas para la onda */}
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <canvas
              ref={canvasRef}
              width={800}
              height={200}
              className="w-full"
            />
          </div>

          {/* Controles */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Frecuencia:</span>
                <span>{frequency} Hz</span>
              </div>
              <Slider
                value={[frequency]}
                onValueChange={([v]) => setFrequency(v)}
                min={50}
                max={300}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Amplitud:</span>
                <span>{(amplitude * 1000).toFixed(1)} mm</span>
              </div>
              <Slider
                value={[amplitude * 1000]}
                onValueChange={([v]) => setAmplitude(v/1000)}
                min={5}
                max={30}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tensión:</span>
                <span>{tension.toFixed(1)} N</span>
              </div>
              <Slider
                value={[tension]}
                onValueChange={([v]) => setTension(v)}
                min={1}
                max={20}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Densidad lineal:</span>
                <span>{(density * 1000).toFixed(1)} g/m</span>
              </div>
              <Slider
                value={[density * 1000]}
                onValueChange={([v]) => setDensity(v/1000)}
                min={5}
                max={50}
                step={0.1}
              />
            </div>
          </div>

          {/* Información calculada */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="space-y-1">
              <p className="text-blue-600">• Velocidad de propagación: {Math.sqrt(tension/density).toFixed(1)} m/s</p>
              <p>• Longitud de onda: {(Math.sqrt(tension/density)/frequency).toFixed(2)} m</p>
              <p>• Potencia transmitida: {(0.5 * density * Math.pow(2 * Math.PI * frequency, 2) * Math.pow(amplitude, 2) * Math.sqrt(tension/density)).toFixed(3)} W</p>
            </div>
            <div className="space-y-1">
              <p>• Frecuencia angular: {(2 * Math.PI * frequency).toFixed(1)} rad/s</p>
              <p>• Número de onda: {(2 * Math.PI * frequency / Math.sqrt(tension/density)).toFixed(2)} rad/m</p>
              <p>• Energía: {(0.5 * density * Math.pow(2 * Math.PI * frequency, 2) * Math.pow(amplitude, 2) * (Math.sqrt(tension/density)/frequency)).toFixed(3)} J</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OscillatorSimulation;