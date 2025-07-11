'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SectionConfig, sectionConfigs } from '@/config/sections';

interface SectionContextType {
  activeSection: string;
  currentConfig: SectionConfig;
  activePage: string | null;
  setActiveSection: (sectionId: string) => void;
  setActivePage: (pageId: string | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

interface SectionProviderProps {
  children: ReactNode;
}

export function SectionProvider({ children }: SectionProviderProps) {
  const [activeSection, setActiveSectionState] = useState<string>('york-rite');
  const [activePage, setActivePageState] = useState<string | null>(null);

  const setActiveSection = (sectionId: string) => {
    if (sectionConfigs[sectionId]) {
      setActiveSectionState(sectionId);
      setActivePageState(null); // Reset page when changing section
    }
  };

  const setActivePage = (pageId: string | null) => {
    setActivePageState(pageId);
  };

  const currentConfig = sectionConfigs[activeSection];

  const value: SectionContextType = {
    activeSection,
    currentConfig,
    activePage,
    setActiveSection,
    setActivePage,
  };

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection(): SectionContextType {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
}