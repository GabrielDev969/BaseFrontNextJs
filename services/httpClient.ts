import { RequestOptions } from '@/types/api';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  console.warn('⚠️ NEXT_PUBLIC_API_URL não está definido nas variáveis de ambiente');
}

// Flag para evitar múltiplas chamadas simultâneas de refresh
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onRefreshed(token: string) {
  refreshSubscribers.forEach(callback => callback(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

async function refreshSession(): Promise<boolean> {
  if (isRefreshing) {
    // Se já está refreshing, aguarda a promessa resolver
    return new Promise((resolve) => {
      addRefreshSubscriber(() => resolve(true));
    });
  }

  isRefreshing = true;

  try {
    if (!BASE_URL) {
      console.error('❌ [Refresh] BASE_URL não configurado');
      return false;
    }

    const url = `${BASE_URL}/auth/refresh`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // CRÍTICO: envia cookies httpOnly
    });

    if (response.ok) {
      // Backend já setou os novos cookies httpOnly automaticamente
      onRefreshed('refreshed'); // Notifica subscribers
      return true;
    }

    // Se o próprio refresh retornar 401, significa que o refreshToken também expirou
    if (response.status === 401) {
      console.error('❌ [Refresh] RefreshToken expirado, sessão inválida');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth.user');
      }
      return false;
    }

    console.error('❌ [Refresh] Refresh falhou com status:', response.status);
    const errorText = await response.text().catch(() => '');
    console.error('❌ [Refresh] Resposta do erro:', errorText);
    return false;
  } catch (error) {
    console.error('❌ [Refresh] Erro ao tentar renovar token:', error);
    return false;
  } finally {
    isRefreshing = false;
  }
}

async function httpClient<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { headers, _retry, ...rest } = options;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (!BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_URL não está configurado');
  }

  const url = `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;

  try {
    const response = await fetch(url, {
      ...rest,
      headers: requestHeaders,
      credentials: 'include', // Importante: envia cookies automaticamente
    });

    if (response.status === 401 && !_retry && !path.includes('/auth/refresh')) {
      const refreshed = await refreshSession();
      
      if (refreshed) {
        return httpClient<T>(path, { ...options, _retry: true });
      } else {
        console.error('❌ [HttpClient] Refresh falhou');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth.user');
        }
        
        // Cria um erro específico para sessão expirada
        const sessionError = new Error('Sessão expirada') as Error & { isSessionExpired: boolean };
        sessionError.isSessionExpired = true;
        throw sessionError;
      }
    }

    // Se não é 401 mas também não é sucesso
    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw new Error(errorBody?.message || `Erro API: ${response.status}`);
    }

    // Verifica se tem conteúdo
    const contentLength = response.headers.get('Content-Length');
    const contentType = response.headers.get('Content-Type');
    
    if (contentLength === '0' || !contentType?.includes('application/json')) {
      return null as T;
    }

    return await response.json();
    
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) => 
    httpClient<T>(path, { method: 'GET', ...options }),
    
  post: <T>(path: string, body?: unknown, options?: RequestOptions) => 
    httpClient<T>(path, { 
      method: 'POST', 
      body: body ? JSON.stringify(body) : undefined, 
      ...options 
    }),
    
  put: <T>(path: string, body: unknown, options?: RequestOptions) => 
    httpClient<T>(path, { 
      method: 'PUT', 
      body: JSON.stringify(body), 
      ...options 
    }),
    
  patch: <T>(path: string, body: unknown, options?: RequestOptions) => 
    httpClient<T>(path, { 
      method: 'PATCH', 
      body: JSON.stringify(body), 
      ...options 
    }),
    
  delete: <T>(path: string, options?: RequestOptions) => 
    httpClient<T>(path, { method: 'DELETE', ...options }),
};