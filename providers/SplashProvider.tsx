'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type SplashPhase = 'brand' | 'reveal' | 'done';

interface SplashContextType {
  splashDismissed: boolean;
  splashPhase: SplashPhase;
  dismissSplash: () => void;
  setSplashPhase: (phase: SplashPhase) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const SplashProvider = ({ children }: { children: ReactNode }) => {
  const [splashDismissed, setSplashDismissed] = useState(false);
  const [splashPhase, setSplashPhase] = useState<SplashPhase>('brand');

  useEffect(() => {
    const skipSplash = new URLSearchParams(window.location.search).get('skipSplash');
    const isShown = sessionStorage.getItem('fcs-splash-shown');
    
    if (skipSplash === 'true' || isShown === 'true') {
      setSplashDismissed(true);
      setSplashPhase('done');
    }
  }, []);

  const dismissSplash = () => {
    sessionStorage.setItem('fcs-splash-shown', 'true');
    setSplashDismissed(true);
    setSplashPhase('done');
  };

  return (
    <SplashContext.Provider value={{ splashDismissed, splashPhase, dismissSplash, setSplashPhase }}>
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
};
