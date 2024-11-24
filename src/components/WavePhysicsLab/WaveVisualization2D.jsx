// src/components/WavePhysicsLab/WaveVisualization2D.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WaveVisualization2D = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  
  const [viewMode, setViewMode] = useState('particles');
  const [frequency] = useState(2);
  const [amplitude] = useState(0.8);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const drawWave = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Fondo negro
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Dibujar la fuente (parlante)
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(50, centerY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Dibujar partículas
      for (let x = 80; x < width; x += 20) {
        for (let y = 50; y < height - 50; y += 20) {
          const distance = Math.sqrt((x - 50) ** 2 + (y - centerY) ** 2);
          const intensity = (Math.sin(distance / 50 - time) + 1) / 2;
          
          ctx.fillStyle = `rgb(${Math.floor(255 * intensity)}, ${Math.floor(255 * intensity)}, ${Math.floor(255 * intensity)})`;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const animate = () => {
      timeRef.current += 0.1;
      drawWave(timeRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simulación de Ondas 2D</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="bg-gray-900 rounded-lg w-full"
          />

          <div className="flex space-x-4">
            <div>
              <input
                type="radio"
                id="particles"
                name="viewMode"
                value="particles"
                checked={viewMode === 'particles'}
                onChange={(e) => setViewMode(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="particles">Partículas</label>
            </div>

            <div>
              <input
                type="radio"
                id="waves"
                name="viewMode"
                value="waves"
                checked={viewMode === 'waves'}
                onChange={(e) => setViewMode(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="waves">Ondas</label>
            </div>

            <div>
              <input
                type="radio"
                id="both"
                name="viewMode"
                value="both"
                checked={viewMode === 'both'}
                onChange={(e) => setViewMode(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="both">Ambos</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaveVisualization2D;