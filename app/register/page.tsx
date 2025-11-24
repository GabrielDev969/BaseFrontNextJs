import Link from 'next/link';
import { RegisterForm } from '@/components/features/auth/RegisterForm';
import { ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-gray-50">
      
      {/* Botão Voltar */}
      <Link 
        href="/" 
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Voltar para home</span>
        <span className="sm:hidden">Voltar</span>
      </Link>

      <div className="mb-6 sm:mb-8 text-center w-full max-w-sm">
        <div className="mx-auto mb-4 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-blue-600/20">
          LP
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Comece sua jornada</h1>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm px-4">
          Crie sua conta gratuitamente e tenha acesso a todos os recursos.
        </p>
      </div>

      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
      
      <p className="mt-6 sm:mt-8 text-center text-xs text-gray-400 px-4">
        Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
    </main>
  );
}