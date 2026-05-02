'use client';

import React, { useEffect, useRef, useCallback } from 'react';

export const CircleRevealCSS = ({ onComplete }: { onComplete: () => void }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const runAnimation = useCallback(() => {
    const duration = 1400;
    const startTime = performance.now();
    // Max radius needed: diagonal of viewport ≈ sqrt(w² + h²)
    // Using vmax: ~71vmax covers the diagonal. We use 75 for safety.
    const maxRadius = 75;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      // easeInOut cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      if (circleRef.current) {
        const radius = eased * maxRadius;
        // The circle grows from center. The box-shadow covers everything outside.
        // As radius grows, more of the homepage is visible inside the circle.
        circleRef.current.style.width = `${radius * 2}vmax`;
        circleRef.current.style.height = `${radius * 2}vmax`;
      }

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        onCompleteRef.current();
      }
    };

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    runAnimation();
  }, [runAnimation]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={circleRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '0vmax',
          height: '0vmax',
          borderRadius: '50%',
          // Strong visible border — clearly outlines the expanding circle
          border: '3px solid rgba(11, 11, 11, 0.25)',
          // Layer 1: Outer glow ring (dark, blurred) — makes the edge pop
          // Layer 2: Second outer glow (wider, softer)
          // Layer 3: The massive white-smoke fill covering the rest of the screen
          // Layer 4: Inner vignette for cinematic depth
          boxShadow: `
            0 0 20px 4px rgba(11, 11, 11, 0.12),
            0 0 60px 10px rgba(11, 11, 11, 0.06),
            0 0 0 100vmax #f5f5f5,
            inset 0 0 60px 20px rgba(11, 11, 11, 0.03)
          `,
          willChange: 'width, height',
        }}
      />
    </div>
  );
};
