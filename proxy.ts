import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const { pathname } = request.nextUrl;

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith('/api');

  // Rotas protegidas que precisam de autenticação
  const protectedRoutes = ['/dashboard', '/admin'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Se for rota pública, permite acesso sem verificação
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Se for rota protegida e não tiver refreshToken, redireciona para login
  if (isProtectedRoute && !refreshToken) {
    const signInUrl = new URL('/login', request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Para todas as outras rotas, permite acesso
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Corresponde a todos os caminhos de requisição exceto:
     * 1. /api/ (rotas de API)
     * 2. /_next/ (arquivos estáticos do Next.js)
     * 3. /_static (imagens, favicon, etc)
     * 4. Arquivos estáticos (imagens, favicon, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

