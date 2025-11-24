'use client'; // Client Component porque usa hooks (useAuth)

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAdmin = user?.role === 'ADMIN';
  const isUser = user?.role === 'USER';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href={user ? '/dashboard' : '/'} className="flex items-center gap-2 flex-shrink-0">
          <div className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base ${
            isAdmin ? 'bg-red-600' : 'bg-blue-600'
          }`}>
            LP
          </div>
          <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 whitespace-nowrap">CleanNext</span>
        </Link>

        {/* Navegação Desktop - Apenas em telas grandes */}
        {!user && !isDashboard && (
          <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm font-medium text-gray-600">
            <Link href="#features" className="hover:text-blue-600 transition whitespace-nowrap">Funcionalidades</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition whitespace-nowrap">Preços</Link>
            <Link href="#about" className="hover:text-blue-600 transition whitespace-nowrap">Sobre</Link>
          </nav>
        )}

        {isAdmin && isDashboard && (
          <nav className="hidden lg:flex gap-3 xl:gap-4 text-xs lg:text-sm font-medium text-gray-600">
            <Link href="/dashboard" className="hover:text-red-600 transition whitespace-nowrap">Dashboard</Link>
            <Link href="/admin/users" className="hover:text-red-600 transition whitespace-nowrap">Usuários</Link>
            <Link href="/admin/settings" className="hover:text-red-600 transition whitespace-nowrap">Configurações</Link>
            <Link href="/admin/reports" className="hover:text-red-600 transition whitespace-nowrap">Relatórios</Link>
          </nav>
        )}

        {isUser && isDashboard && (
          <nav className="hidden lg:flex gap-3 xl:gap-4 text-xs lg:text-sm font-medium text-gray-600">
            <Link href="/dashboard" className="hover:text-blue-600 transition whitespace-nowrap">Dashboard</Link>
            <Link href="/dashboard/profile" className="hover:text-blue-600 transition whitespace-nowrap">Perfil</Link>
            <Link href="/dashboard/activities" className="hover:text-blue-600 transition whitespace-nowrap">Atividades</Link>
          </nav>
        )}

        {/* Área de Ação Desktop - Ajustada para tablets */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
          {user ? (
            <div className="flex items-center gap-2 xl:gap-4">
              <div className="flex items-center gap-1.5 xl:gap-2">
                <span className="text-xs xl:text-sm text-gray-700 whitespace-nowrap">
                  Olá, <strong className="hidden xl:inline">{user.name}</strong>
                  <strong className="xl:hidden">{user.name.split(' ')[0]}</strong>
                </span>
                {isAdmin && (
                  <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 xl:px-2.5 py-0.5 text-xs font-medium text-red-800">
                    ADMIN
                  </span>
                )}
                {isUser && (
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-1.5 xl:px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    USER
                  </span>
                )}
              </div>
              {!isDashboard && (
                <Link 
                  href="/dashboard"
                  className="rounded-md bg-gray-100 px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium text-gray-900 hover:bg-gray-200 whitespace-nowrap"
                >
                  Dashboard
                </Link>
              )}
              <button 
                onClick={() => signOut()}
                className="text-xs xl:text-sm text-red-600 hover:text-red-800 transition-colors whitespace-nowrap px-1"
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
              >
                Entrar
              </Link>
              <Link 
                href="/register" 
                className="rounded-md bg-blue-600 px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 whitespace-nowrap"
              >
                Criar Conta
              </Link>
            </>
          )}
        </div>

        {/* Botão Menu Mobile - Até lg (1024px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 flex-shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <div className="pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-900">{user.name}</span>
                    {isAdmin && (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        ADMIN
                      </span>
                    )}
                    {isUser && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                        USER
                      </span>
                    )}
                  </div>
                </div>

                {isAdmin && isDashboard && (
                  <nav className="flex flex-col gap-3">
                    <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                      Dashboard
                    </Link>
                    <Link href="/admin/users" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                      Usuários
                    </Link>
                    <Link href="/admin/settings" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                      Configurações
                    </Link>
                    <Link href="/admin/reports" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                      Relatórios
                    </Link>
                  </nav>
                )}

                {isUser && isDashboard && (
                  <nav className="flex flex-col gap-3">
                    <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Dashboard
                    </Link>
                    <Link href="/dashboard/profile" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Perfil
                    </Link>
                    <Link href="/dashboard/activities" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Atividades
                    </Link>
                  </nav>
                )}

                {!isDashboard && (
                  <Link 
                    href="/dashboard"
                    className="block w-full text-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}

                <button 
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-center text-sm text-red-600 hover:text-red-800 py-2"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                {!isDashboard && (
                  <nav className="flex flex-col gap-3 pb-3 border-b border-gray-200">
                    <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Funcionalidades
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Preços
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                      Sobre
                    </Link>
                  </nav>
                )}
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/login" 
                    className="block w-full text-center text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link 
                    href="/register" 
                    className="block w-full text-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Criar Conta
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}