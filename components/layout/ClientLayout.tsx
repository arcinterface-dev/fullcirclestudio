'use client';

import React from 'react';
import { SplashProvider } from '@/providers/SplashProvider';
import { SplashScreen } from '@/components/splash/SplashScreen';
import { CircleMenu } from '@/components/layout/CircleMenu';
import { Header } from '@/components/layout/Header';
import { FABs } from '@/components/layout/FABs';
import { Footer } from '@/components/layout/Footer';
import { MaintenanceOverlay } from '@/components/layout/MaintenanceOverlay';
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SplashProvider>
      <MaintenanceOverlay />
      <SplashScreen />
      <Header />
      <CircleMenu />
      <FABs />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </SplashProvider>
  );
};
