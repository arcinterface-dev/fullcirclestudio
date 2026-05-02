'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera, Sphere, AdaptiveDpr, Preload } from '@react-three/drei';
import styles from './StorytellingSection.module.scss';

const StoryShape = ({ progress, index, color, position }: { progress: any, index: number, color: string, position: [number, number, number] }) => {
  const stepStart = index / 4;
  const stepEnd = (index + 1) / 4;

  return (
    <Sphere args={[1.5, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.4}
      />
    </Sphere>
  );
};

const Scene = ({ progress }: { progress: any }) => {
  const colors = ["#d9d9d9", "#bcbab4", "#454545", "#d54e5e"];
  const positions: [number, number, number][] = [
    [-3, 2, -2],
    [3, -2, -2],
    [-3, -2, -2],
    [3, 2, -2]
  ];
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      {colors.map((color, i) => (
        <StoryShape key={i} index={i} color={color} progress={progress} position={positions[i]} />
      ))}
      <AdaptiveDpr pixelated />
      <Preload all />
    </>
  );
};

export const StorytellingVisual3D = ({ progress }: { progress: any }) => {
  return (
    <div className={styles.visualContainer}>
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
};
