import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OscillatorSimulation from './OscillatorSimulation';
import WaveVisualization2D from './WaveVisualization2D';
import ComprehensiveWave from './ComprehensiveWave';

const WavePhysicsLab = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <Tabs defaultValue="comprehensive" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comprehensive">Simulación Comprensiva</TabsTrigger>
          <TabsTrigger value="2d">Ondas 2D</TabsTrigger>
          <TabsTrigger value="oscillator">Oscilador</TabsTrigger>
        </TabsList>

        <TabsContent value="comprehensive">
          <ComprehensiveWave />
        </TabsContent>

        <TabsContent value="2d">
          <WaveVisualization2D />
        </TabsContent>

        <TabsContent value="oscillator">
          <OscillatorSimulation />
        </TabsContent>
      </Tabs>

      <div className="text-sm text-gray-600 mt-4">
        <p className="mb-2">Esta aplicación incluye tres simulaciones diferentes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Simulación Comprensiva:</strong> Visualización detallada de ondas con 
            todos los parámetros físicos y ecuaciones.
          </li>
          <li>
            <strong>Ondas 2D:</strong> Visualización de la propagación de ondas en dos 
            dimensiones con partículas y frentes de onda.
          </li>
          <li>
            <strong>Oscilador:</strong> Simulación de un oscilador armónico simple con 
            control preciso de parámetros.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WavePhysicsLab;