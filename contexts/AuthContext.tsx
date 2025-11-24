'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth';
import { LoginRequest, SignupRequest, User } from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (data: LoginRequest) => Promise<void>;
  signOut: () => void;
  signUp: (data: SignupRequest) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Carrega o usuário quando o componente montar
  useEffect(() => {
    loadUserFromStorage();
  }, []);

  async function loadUserFromStorage() {
    try {
      const user = await authService.me();
      setUser(user);
      localStorage.setItem('auth.user', JSON.stringify(user));
      
    } catch (error: any) {
      const isSessionExpired = error?.isSessionExpired || error?.message === 'Sessão expirada';
      
      if (isSessionExpired) {
        setUser(null);
        localStorage.removeItem('auth.user');
        router.push('/login?session=expired');
      } else {
        const storedUser = localStorage.getItem('auth.user');
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            setUser(user);
          } catch {
            setUser(null);
            localStorage.removeItem('auth.user');
          }
        } else {
          setUser(null);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn({ email, password }: LoginRequest) {
    try {
      setIsLoading(true);
      const response = await authService.login({ email, password });
      
      const { user } = response;
      
      localStorage.setItem('auth.user', JSON.stringify(user));
      
      setUser(user);
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Erro ao fazer login', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      setIsLoading(true);
      
      // Limpa o estado local primeiro
      localStorage.removeItem('auth.user');
      setUser(null);
      
      // Chama o logout na API (ela vai limpar os cookies httpOnly)
      await authService.logout();
      
    } catch (error) {
      console.error('Erro ao realizar logout no servidor:', error);
      // Mesmo se der erro, limpa o estado local
      localStorage.removeItem('auth.user');
      setUser(null);
    } finally {
      setIsLoading(false);
      // Usa window.location para forçar redirecionamento completo
      // Isso garante que o middleware não interfira
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      } else {
        router.push('/login');
      }
    }
  }

  async function signUp(data: SignupRequest) {
    try {
      setIsLoading(true);
      await authService.register(data);
      router.push('/login?registered=true');
    } catch (error) {
      console.error('Erro no cadastro', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading,
        signIn, 
        signOut, 
        signUp 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);