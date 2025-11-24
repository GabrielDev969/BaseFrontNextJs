'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';

export function LoginForm() {
  const { signIn } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn({ email, password });
    } catch (err) {
      setError('Credenciais inválidas. Verifique seu e-mail e senha.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      {/* Cabeçalho do Card */}
      <div className="bg-gray-50 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Bem-vindo</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Entre com sua conta para continuar</p>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Alerta de Erro */}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 animate-pulse">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Campo de Email */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">E-mail</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:outline-none transition-all duration-200 ${
                  error ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                }`}
                placeholder="seu@email.com"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div className="space-y-1">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-semibold text-gray-700">Senha</label>
              <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={20} />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full pl-10 pr-10 py-2.5 border rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:outline-none transition-all duration-200 ${
                  error ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                }`}
                placeholder="********"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                disabled={loading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Botão de Submit */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Entrando...
              </>
            ) : (
              'Acessar Plataforma'
            )}
          </button>

        </form>
      </div>

      {/* Rodapé do Card */}
      <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-100 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
            Cadastre-se grátis
          </Link>
        </p>
      </div>
    </div>
  );
}