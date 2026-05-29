'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const RevealShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uColor: { value: new THREE.Color('#eeece8') }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uProgress;
    uniform vec2 uResolution;
    uniform vec3 uColor;
    varying vec2 vUv;
    
    void main() {
      // Aspect ratio correction
      vec2 aspectUv = vUv;
      float aspect = uResolution.x / uResolution.y;
      if (aspect > 1.0) {
        aspectUv.x = (vUv.x - 0.5) * aspect + 0.5;
      } else {
        aspectUv.y = (vUv.y - 0.5) / aspect + 0.5;
      }
      
      // Distance from center
      float dist = distance(aspectUv, vec2(0.5));
      
      // Max distance to cover screen corners
      float maxDist = length(vec2(0.5, 0.5 * min(aspect, 1.0/aspect)));
      if(aspect > 1.0) {
         maxDist = length(vec2(0.5 * aspect, 0.5));
      } else {
         maxDist = length(vec2(0.5, 0.5 / aspect));
      }
      
      // We want to scale progress to cover maxDist
      float radius = uProgress * maxDist * 1.5;
      
      // Smooth step for anti-aliased edge
      float alpha = smoothstep(radius, radius + 0.05, dist);
      
      gl_FragColor = vec4(uColor, alpha);
    }
  `
};

const RevealPlane = ({ onComplete }: { onComplete: () => void }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();
  
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uColor: { value: new THREE.Color('#eeece8') } // matches white-smoke
    };
  }, [size]);
  
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      
      // Easing function for smooth circle expansion
      const p = materialRef.current.uniforms.uProgress.value;
      if (p < 1.0) {
        // Increase progress
        materialRef.current.uniforms.uProgress.value += delta * 0.8;
      } else {
         onComplete();
      }
    }
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={RevealShaderMaterial.vertexShader}
        fragmentShader={RevealShaderMaterial.fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

export const CircleRevealCanvas = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 45, pointerEvents: 'none' }}>
      <Canvas orthographic camera={{ position: [0, 0, 1] }}>
        <RevealPlane onComplete={onComplete} />
      </Canvas>
    </div>
  );
};
