
import { LoginRequest, LoginResponse, SignupRequest, User } from '@/types/auth';
import { api } from '../httpClient';

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    return await api.post<LoginResponse>('/auth/login', credentials);
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout', {}); 
  },

  register: async (data: SignupRequest): Promise<void> => {
    // Esperamos um 201, sem retorno de corpo necessário por enquanto
    await api.post('/auth/signup', data);
  },

  async me(): Promise<User> {
    const response = await api.get<User>('/auth/me');
    return response;
  },

  async refreshToken(): Promise<boolean> {
    try {
      // Usa _retry para evitar loop infinito se o refresh também retornar 401
      await api.post('/auth/refresh', {}, { _retry: true });
      return true;
    } catch (error) {
      console.error('❌ [AuthService] Erro ao fazer refresh:', error);
      return false;
    }
  },
};