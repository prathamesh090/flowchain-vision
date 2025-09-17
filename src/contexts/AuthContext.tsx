import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'signup';
  openAuthModal: (mode: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  switchAuthMode: (mode: 'login' | 'signup') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const switchAuthMode = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthModalOpen, 
        authModalMode, 
        openAuthModal, 
        closeAuthModal, 
        switchAuthMode 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};