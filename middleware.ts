import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const signInUrl = new URL('/login', request.url);
  const dashboardUrl = new URL('/dashboard', request.url);

  const { pathname } = request.nextUrl;
  const searchParams = request.nextUrl.searchParams;

  // Permite acesso à página de login sempre (para permitir logout/troca de conta)
  // A página de login pode decidir se redireciona ou não baseado no estado do cliente
  if (pathname === '/login' || pathname === '/register') {
    return NextResponse.next();
  }

  if (pathname.startsWith('/dashboard')) {
    if (!refreshToken) {
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Corresponde a todos os caminhos de requisição exceto:
     * 1. /api/ (rotas de API)
     * 2. /_next/ (arquivos estáticos do Next.js)
     * 3. /_static (imagens, favicon, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};