/**
 * src/components/WavePhysicsLab/WaveEquations.js
 * Ecuaciones fundamentales para la simulación de ondas mecánicas
 */
export const generateWave = (width, height, frequency, amplitude, waveSpeed, time) => {
  const points = [];
  const k = 2 * Math.PI * frequency / waveSpeed;
  
  for (let x = 0; x < width; x++) {
    const y = height/2 + amplitude * 1000 * Math.sin(k * x/10 - 2 * Math.PI * frequency * time);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
};

export const calculateWaveParameters = (tension, density, frequency, amplitude) => {
  const waveSpeed = Math.sqrt(tension/density);
  const wavelength = waveSpeed/frequency;
  const power = 0.5 * density * Math.pow(2 * Math.PI * frequency, 2) * Math.pow(amplitude, 2) * waveSpeed;
  const energy = 0.5 * density * Math.pow(2 * Math.PI * frequency, 2) * Math.pow(amplitude, 2) * wavelength;
  
  return {
    waveSpeed,
    power,
    wavelength,
    energy
  };
};
// Velocidad de propagación de la onda en una cuerda
export const calculateWaveSpeed = (tension, density) => {
  return Math.sqrt(tension/density);
};

// Potencia transmitida por la onda
export const calculatePower = (density, frequency, amplitude, waveSpeed) => {
  const omega = 2 * Math.PI * frequency;
  return 0.5 * density * Math.pow(omega, 2) * Math.pow(amplitude, 2) * waveSpeed;
};

// Generar puntos para onda viajera armónica
export const generateOscillatorWave = (width, height, frequency, amplitude, waveSpeed, time) => {
  const points = [];
  const omega = 2 * Math.PI * frequency;
  const k = omega / waveSpeed; // número de onda k = 2π/λ = ω/v
  
  for (let x = 0; x < width; x++) {
    // y = A sen(kx ± ωt), usando - para onda que viaja hacia la derecha
    const y = height/2 + amplitude * 1000 * Math.sin(k * x/10 - omega * time);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
};

// Generar puntos para interferencia de ondas
export const generateInterferenceWaves = (width, height, wave1Freq, wave2Freq, wave1Amp, wave2Amp, phaseShift, time) => {
  const points1 = [];
  const points2 = [];
  const pointsSum = [];
  
  const omega1 = 2 * Math.PI * wave1Freq;
  const omega2 = 2 * Math.PI * wave2Freq;
  const k1 = 0.1 * wave1Freq;  // Escalado para visualización
  const k2 = 0.1 * wave2Freq;
  
  for (let x = 0; x < width; x++) {
    // Onda 1: y₁ = A₁ sen(k₁x - ω₁t)
    const y1 = wave1Amp * Math.sin(k1 * x - omega1 * time);
    
    // Onda 2: y₂ = A₂ sen(k₂x - ω₂t + φ)
    const y2 = wave2Amp * Math.sin(k2 * x - omega2 * time + phaseShift);
    
    // Superposición: y = y₁ + y₂
    const ySum = y1 + y2;
    
    points1.push(`${x},${height/2 + y1}`);
    points2.push(`${x},${height/2 + y2}`);
    pointsSum.push(`${x},${height/2 + ySum}`);
  }
  
  return { wave1: points1.join(' '), wave2: points2.join(' '), sum: pointsSum.join(' ') };
};

// Generar puntos para onda estacionaria
export const generateStandingWave = (width, height, wavelength, amplitude, frequency, time) => {
  const points = [];
  const k = 2 * Math.PI / wavelength;
  const omega = 2 * Math.PI * frequency;
  
  for (let x = 0; x < width; x++) {
    // y = 2A sen(kx)cos(ωt)
    const y = height/2 + 2 * amplitude * Math.sin(k * x) * Math.cos(omega * time);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
};

// Calcular coeficientes de reflexión y transmisión
export const calculateReflectionTransmission = (density1, density2) => {
  const mu1 = Math.sqrt(density1);
  const mu2 = Math.sqrt(density2);
  
  // Coeficiente de reflexión: R = (√μ₁ - √μ₂)/(√μ₁ + √μ₂)
  const R = (mu1 - mu2) / (mu1 + mu2);
  
  // Coeficiente de transmisión: T = 2√μ₁/(√μ₁ + √μ₂)
  const T = (2 * mu1) / (mu1 + mu2);
  
  return { R, T };
};

// Calcular frecuencias de resonancia para ondas estacionarias
export const calculateResonanceFrequencies = (length, tension, density, n) => {
  const v = Math.sqrt(tension/density);
  // fn = (n/2L)v, donde n es el modo de vibración
  return (n / (2 * length)) * v;
};

// Calcular longitudes de onda para modos normales
export const calculateModeWavelengths = (length, n) => {
  // λn = 2L/n, donde n es el modo de vibración
  return (2 * length) / n;
};

// Calcular energía total de la onda
export const calculateTotalEnergy = (density, frequency, amplitude, wavelength) => {
  const omega = 2 * Math.PI * frequency;
  // ET = ½μω²A²λ
  return 0.5 * density * Math.pow(omega, 2) * Math.pow(amplitude, 2) * wavelength;
};

// Calcular posiciones de nodos en onda estacionaria
export const calculateNodes = (length, wavelength) => {
  const nodes = [];
  const nodesCount = Math.floor((2 * length) / wavelength);
  
  for (let n = 0; n <= nodesCount; n++) {
    nodes.push(n * wavelength/2);
  }
  return nodes;
};

// Calcular posiciones de antinodos en onda estacionaria
export const calculateAntinodes = (length, wavelength) => {
  const antinodes = [];
  const antinodesCount = Math.floor((2 * length) / wavelength);
  
  for (let n = 1; n <= antinodesCount; n++) {
    antinodes.push((2 * n - 1) * wavelength/4);
  }
  return antinodes;
};