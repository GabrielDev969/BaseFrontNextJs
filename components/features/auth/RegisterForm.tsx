'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, User, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';

export function RegisterForm() {
  const { signUp } = useAuth();
  
  const [name, setName] = useState('');
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
      await signUp({ name, email, password });
      // O redirecionamento acontece no Contexto
    } catch (err: any) {
      // Tenta pegar a mensagem da API ou usa uma genérica
      setError(err.message || 'Erro ao criar conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      <div className="bg-gray-50 px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Crie sua conta</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Junte-se a nós em segundos</p>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 animate-pulse">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Campo Nome */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Nome Completo</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <User size={20} />
              </div>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 bg-gray-50 focus:bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Sarah Connor"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo Email */}
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
                className="block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 bg-gray-50 focus:bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="user@example.com"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Senha</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={20} />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border rounded-lg text-gray-900 bg-gray-50 focus:bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Mínimo 8 caracteres"
                required
                minLength={6}
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

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Criando conta...
              </>
            ) : (
              'Cadastrar'
            )}
          </button>

        </form>
      </div>

      <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-100 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          Já tem uma conta?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
}