import { createContext, useLayoutEffect, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  refreshAuth: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  refreshAuth: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
      setAccessToken(accessToken);
    } else {
      setIsAuthenticated(false);
      setAccessToken(null);
    }

    setIsLoading(false);
  }, [accessToken]);

  const refreshAuth = () => {
    const token = 'aaaaa';
    setAccessToken(token);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
