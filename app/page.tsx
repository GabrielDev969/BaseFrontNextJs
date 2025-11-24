import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-16"> {/* pt-16 para compensar o header fixo */}
        
        {/* SEÇÃO HERO */}
        <section className="relative px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Arquitetura Limpa para <span className="text-blue-600">Projetos Reais</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Uma base sólida construída com Next.js 16, TypeScript e Clean Architecture. 
              Focada em escalabilidade, manutenção e performance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/login"
                className="w-full sm:w-auto rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
              >
                Começar Agora
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO FEATURES */}
        <section id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Por que usar?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tudo que você precisa para escalar
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
                
                {/* Feature 1 */}
                <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-4 h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    ⚡
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">Performance First</h3>
                  <p className="mt-2 flex-auto text-base leading-7 text-gray-600">
                    Utilizando Server Components e otimizações nativas do Next.js para máxima velocidade.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-4 h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    🛡️
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">Autenticação Segura</h3>
                  <p className="mt-2 flex-auto text-base leading-7 text-gray-600">
                    Gerenciamento de estado global com Context API, Cookies seguros e JWT.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-4 h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    🧩
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">Arquitetura Limpa</h3>
                  <p className="mt-2 flex-auto text-base leading-7 text-gray-600">
                    Separação clara de responsabilidades: Services, Components e Hooks organizados.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}