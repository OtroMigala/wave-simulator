import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
// Eliminamos la importación local de KaTeX CSS
import katex from 'katex';

const ComprehensiveWave = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  
  const [amplitude, setAmplitude] = useState(0.8);     // A
  const [frequency, setFrequency] = useState(2);       // f
  const [wavelength, setWavelength] = useState(100);   // λ
  const [tension, setTension] = useState(10);          // T
  const [density, setDensity] = useState(0.01);        // μ
  const [dampingFactor, setDampingFactor] = useState(0.01); // α
  const [viewMode, setViewMode] = useState('particles');

  // Cálculo de parámetros derivados
  const period = 1 / frequency;                        // T = 1/f
  const angularFrequency = 2 * Math.PI * frequency;    // ω = 2πf
  const waveNumber = 2 * Math.PI / wavelength;         // k = 2π/λ
  const waveSpeed = Math.sqrt(tension / density);      // v = √(T/μ)
  const energy = 0.5 * density * Math.pow(angularFrequency, 2) * Math.pow(amplitude, 2) * wavelength;
  const power = energy * frequency;

  // Función para renderizar ecuaciones
  const renderEquation = (equation, displayMode = true) => {
    const html = katex.renderToString(equation, {
      throwOnError: false,
      displayMode: displayMode
    });
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajustar el tamaño del canvas al contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
      
      canvas.width = containerWidth;
      canvas.height = containerHeight;
    };

    // Llamar inicialmente y agregar listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const drawWave = (time) => {
      ctx.clearRect(0, 0, width, height);
      
      // Fondo negro
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Fuente de onda
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(50, centerY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Dibujar partículas
      if (viewMode === 'particles' || viewMode === 'both') {
        for (let x = 80; x < width; x += 20) {
          for (let y = 50; y < height - 50; y += 20) {
            const distance = Math.sqrt((x - 50) ** 2 + (y - centerY) ** 2);
            
            // Usamos la misma función de intensidad que WaveVisualization2D
            const intensity = (Math.sin(distance / 50 - time) + 1) / 2;
            
            const brightness = Math.floor(255 * intensity);
            ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Frentes de onda
      if (viewMode === 'waves' || viewMode === 'both') {
        for (let radius = 0; radius < width; radius += 50) {
          const intensity = (Math.sin(radius / 50 - time) + 1) / 2;
          ctx.strokeStyle = `rgba(255, 255, 255, ${intensity})`;
          ctx.beginPath();
          ctx.arc(50, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      timeRef.current += 0.1;  // Velocidad de animación ajustada
      drawWave(timeRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [viewMode]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simulación Comprensiva de Ondas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="w-full aspect-video relative">
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="absolute inset-0 w-full h-full bg-gray-900 rounded-lg"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>

          {/* Ecuaciones fundamentales */}
          <div className="bg-gray-50 p-6 rounded-lg text-lg overflow-x-auto">
            <div className="space-y-4">
              {/* Ecuación principal con valores actuales */}
              <div>
                {renderEquation(`y(x,t) = ${amplitude.toFixed(2)}\\sin(${waveNumber.toFixed(3)}x - ${angularFrequency.toFixed(2)}t)`)}
              </div>

              {/* Sistema de ecuaciones */}
              <div>
                {renderEquation(`\\begin{cases} 
                  k = \\frac{2\\pi}{\\lambda} = ${waveNumber.toFixed(3)} \\text{ rad/m}\\\\[1em]
                  \\omega = 2\\pi f = ${angularFrequency.toFixed(2)} \\text{ rad/s}\\\\[1em]
                  v = \\sqrt{\\frac{T}{\\mu}} = ${waveSpeed.toFixed(2)} \\text{ m/s}
                \\end{cases}`)}
              </div>

              {/* Ecuación de energía */}
              <div>
                {renderEquation(`E = \\frac{1}{2}\\mu\\omega^2A^2\\lambda = ${energy.toFixed(3)} \\text{ J}`)}
              </div>
            </div>
          </div>

          {/* Controles de parámetros */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Amplitud {renderEquation('A', false)}:</span>
                <span>{amplitude.toFixed(2)} m</span>
              </div>
              <Slider
                value={[amplitude]}
                onValueChange={([v]) => setAmplitude(v)}
                min={0.1}
                max={1}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Frecuencia {renderEquation('f', false)}:</span>
                <span>{frequency} Hz</span>
              </div>
              <Slider
                value={[frequency]}
                onValueChange={([v]) => setFrequency(v)}
                min={0.5}
                max={5}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Longitud de onda {renderEquation('\\lambda', false)}:</span>
                <span>{wavelength} m</span>
              </div>
              <Slider
                value={[wavelength]}
                onValueChange={([v]) => setWavelength(v)}
                min={50}
                max={200}
                step={10}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tensión {renderEquation('T', false)}:</span>
                <span>{tension} N</span>
              </div>
              <Slider
                value={[tension]}
                onValueChange={([v]) => setTension(v)}
                min={1}
                max={20}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Densidad lineal {renderEquation('\\mu', false)}:</span>
                <span>{density} kg/m</span>
              </div>
              <Slider
                value={[density]}
                onValueChange={([v]) => setDensity(v)}
                min={0.001}
                max={0.05}
                step={0.001}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Factor de amortiguamiento {renderEquation('\\alpha', false)}:</span>
                <span>{dampingFactor.toFixed(3)}</span>
              </div>
              <Slider
                value={[dampingFactor]}
                onValueChange={([v]) => setDampingFactor(v)}
                min={0}
                max={0.05}
                step={0.001}
              />
            </div>
          </div>

          {/* Selector de modo de visualización */}
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
              <label htmlFor="waves">Frentes de onda</label>
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

          {/* Panel de información calculada */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="space-y-1">
              <p>• Periodo {renderEquation('T', false)}: {period.toFixed(3)} s</p>
              <p>• Frecuencia angular {renderEquation('\\omega', false)}: {angularFrequency.toFixed(1)} rad/s</p>
              <p>• Número de onda {renderEquation('k', false)}: {waveNumber.toFixed(3)} rad/m</p>
              <p>• Velocidad de propagación {renderEquation('v', false)}: {waveSpeed.toFixed(1)} m/s</p>
            </div>
            <div className="space-y-1">
              <p>• Longitud de onda {renderEquation('\\lambda', false)}: {wavelength} m</p>
              <p>• Energía {renderEquation('E', false)}: {energy.toFixed(3)} J</p>
              <p>• Potencia {renderEquation('P', false)}: {power.toFixed(3)} W</p>
              <p>• {renderEquation('v = \\lambda f', false)} = {(wavelength * frequency).toFixed(1)} m/s</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComprehensiveWave;