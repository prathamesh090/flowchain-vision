import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  direction: number;
  setDirection: (direction: number) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [direction, setDirection] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <NavigationContext.Provider value={{ direction, setDirection, currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};