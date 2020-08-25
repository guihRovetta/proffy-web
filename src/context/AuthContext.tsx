import React, { createContext, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';

interface ContextProps {
  loading: boolean;
  authenticated: boolean;
  handleLogin(email: string, password: string): void;
  handleLogout(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const Context = createContext<ContextProps>({} as ContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider
      value={{ loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
