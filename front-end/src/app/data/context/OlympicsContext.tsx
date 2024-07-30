'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useFetchData } from '../hooks/useApi';
import { Event } from '../types/types';

interface OlympicsContextProps {
  events: Event[] | null;
  loading: boolean;
  error: string | null;
}

const OlympicsContext = createContext<OlympicsContextProps | undefined>(undefined);

export const OlympicsProvider = ({ children }: { children: ReactNode }) => {
  const { data: events, loading, error } = useFetchData<Event[]>('events');

  return (
    <OlympicsContext.Provider value={{ events, loading, error }}>
      {children}
    </OlympicsContext.Provider>
  );
};

export const useOlympics = () => {
  const context = useContext(OlympicsContext);
  if (!context) {
    throw new Error('useOlympics must be used within an OlympicsProvider');
  }
  return context;
};
