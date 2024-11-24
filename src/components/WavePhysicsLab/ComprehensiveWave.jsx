import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const ComprehensiveWave = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  
  // Parámetros físicos fundamentales
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const drawWave = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Fuente de onda
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(50, centerY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Visualización de partículas
      if (viewMode === 'particles' || viewMode === 'both') {
        for (let x = 80; x < width; x += 20) {
          for (let y = 50; y < height - 50; y += 20) {
            const distance = Math.sqrt((x - 50) ** 2 + (y - centerY) ** 2);
            const damping = Math.exp(-dampingFactor * distance);
            const displacement = amplitude * damping * 
              Math.sin(waveNumber * distance - angularFrequency * time);
            
            const intensity = (displacement + 1) / 2;
            
            ctx.fillStyle = `rgb(${Math.floor(255 * intensity)}, 
                               ${Math.floor(255 * intensity)}, 
                               ${Math.floor(255 * intensity)})`;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Visualización de frentes de onda
      if (viewMode === 'waves' || viewMode === 'both') {
        for (let radius = 0; radius < width; radius += wavelength/4) {
          const intensity = Math.abs(Math.sin(waveNumber * radius - angularFrequency * time));
          ctx.strokeStyle = `rgba(0, 255, 255, ${intensity * 0.5})`;
          ctx.beginPath();
          ctx.arc(50, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      timeRef.current += 0.02;
      drawWave(timeRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [amplitude, frequency, wavelength, dampingFactor, viewMode, waveNumber, angularFrequency]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simulación Comprensiva de Ondas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="bg-gray-900 rounded-lg w-full"
          />

          {/* Ecuaciones fundamentales con react-katex */}
          <div className="bg-gray-50 p-6 rounded-lg text-lg overflow-x-auto">
            <div className="space-y-6">
              {/* Ecuación principal de onda */}
              <div className="mb-4">
                <BlockMath math={`y(x,t) = ${amplitude.toFixed(2)}\\sin(${waveNumber.toFixed(3)}x - ${angularFrequency.toFixed(2)}t)`} />
              </div>

              {/* Sistema de ecuaciones principales */}
              <div className="mb-6">
                <BlockMath
                  math={`\\begin{cases} 
                    k = \\frac{2\\pi}{\\lambda} = ${waveNumber.toFixed(3)} \\text{ rad/m}\\\\[1em]
                    \\omega = 2\\pi f = ${angularFrequency.toFixed(2)} \\text{ rad/s}\\\\[1em]
                    v = \\sqrt{\\frac{T}{\\mu}} = ${waveSpeed.toFixed(2)} \\text{ m/s}
                  \\end{cases}`}
                />
              </div>

              {/* Ecuación de energía */}
              <div className="mb-4">
                <BlockMath
                  math={`E = \\frac{1}{2}\\mu\\omega^2A^2\\lambda = ${energy.toFixed(3)} \\text{ J}`}
                />
              </div>

              {/* Ecuación diferencial de onda */}
              <div>
                <BlockMath
                  math={"\\frac{\\partial^2 y}{\\partial t^2} = \\frac{T}{\\mu}\\frac{\\partial^2 y}{\\partial x^2}"} 
                />
                <div className="text-sm text-gray-600 mt-2">
                  Ecuación diferencial de onda en una dimensión, donde:
                  <ul className="list-disc pl-5 mt-1">
                    <li>T es la tensión de la cuerda</li>
                    <li>μ es la densidad lineal de masa</li>
                    <li>∂²y/∂t² es la aceleración transversal</li>
                    <li>∂²y/∂x² es la curvatura de la cuerda</li>
                  </ul>
                </div>
              </div>

              {/* Relaciones adicionales */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <BlockMath
                  math={`\\begin{aligned}
                    v &= \\lambda f = \\frac{\\omega}{k} = ${waveSpeed.toFixed(2)} \\text{ m/s}\\\\[1em]
                    T &= \\frac{1}{f} = ${period.toFixed(3)} \\text{ s}
                  \\end{aligned}`}
                />
              </div>
            </div>
          </div>

          {/* Control de parámetros */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Amplitud (<InlineMath math="A" />):</span>
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
                <span>Frecuencia (<InlineMath math="f" />):</span>
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
                <span>Longitud de onda (<InlineMath math="\lambda" />):</span>
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
                <span>Tensión (<InlineMath math="T" />):</span>
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
                <span>Densidad lineal (<InlineMath math="\mu" />):</span>
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
                <span>Factor de amortiguamiento (<InlineMath math="\alpha" />):</span>
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

          {/* Controles de visualización */}
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
              <p>• Periodo (<InlineMath math="T" />): {period.toFixed(3)} s</p>
              <p>• Frecuencia angular (<InlineMath math="\omega" />): {angularFrequency.toFixed(1)} rad/s</p>
              <p>• Número de onda (<InlineMath math="k" />): {waveNumber.toFixed(3)} rad/m</p>
              <p>• Velocidad de propagación (<InlineMath math="v" />): {waveSpeed.toFixed(1)} m/s</p>
            </div>
            <div className="space-y-1">
              <p>• Longitud de onda (<InlineMath math="\lambda" />): {wavelength} m</p>
              <p>• Energía (<InlineMath math="E" />): {energy.toFixed(3)} J</p>
              <p>• Potencia (<InlineMath math="P" />): {power.toFixed(3)} W</p>
              <p>• <InlineMath math="v = \lambda f" /> = {(wavelength * frequency).toFixed(1)} m/s</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComprehensiveWave;