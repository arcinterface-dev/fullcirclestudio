'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, ContactShadows, AdaptiveDpr, Preload } from '@react-three/drei';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}

const FloatingShape = ({ position, color, speed, distort }: FloatingShapeProps) => {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={1.5}>
      <Sphere args={[1, 32, 32]} position={position} scale={0.75}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={40} />
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <FloatingShape position={[0.5, 0, 0]} color="#d9d9d9" speed={1} distort={0.2} />
      <FloatingShape position={[-1, 1.5, -1]} color="#d54e5e" speed={1.2} distort={0.4} />
      <FloatingShape position={[2, -1.5, -0.5]} color="#6b6762" speed={1.5} distort={0.2} />
      
      <ContactShadows
        position={[0, -2.8, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4.5}
      />
      <Environment preset="studio" />
      <AdaptiveDpr pixelated />
      <Preload all />
    </>
  );
};

export const HeroVisual3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};
