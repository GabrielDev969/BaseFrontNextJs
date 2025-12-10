import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContributorsSection } from '@/components/sections/ContributorsSection';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, Code, Server, Globe, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Header />

      <main className="flex-1 pt-14 sm:pt-16 w-full overflow-x-hidden"> {/* pt-14 sm:pt-16 para compensar o header fixo */}
        
        {/* SEÇÃO HERO */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Arquitetura Limpa para <span className="text-blue-600">Projetos Reais</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-2">
              Uma base sólida construída com Next.js 16, TypeScript e Clean Architecture. 
              Focada em escalabilidade, manutenção e performance.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 xl:gap-6 px-2">
              <Link
                href="/login"
                className="w-full sm:w-auto rounded-md bg-blue-600 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
              >
                Começar Agora
              </Link>
              <a href="#features" className="text-xs sm:text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO FEATURES */}
        <section id="features" className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Por que usar?</h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Tudo que você precisa para escalar
              </p>
            </div>
            
            <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                
                {/* Feature 1 */}
                <div className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg sm:text-xl">
                    ⚡
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 text-gray-900">Performance First</h3>
                  <p className="mt-2 flex-auto text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                    Utilizando Server Components e otimizações nativas do Next.js para máxima velocidade.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg sm:text-xl">
                    🛡️
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 text-gray-900">Autenticação Segura</h3>
                  <p className="mt-2 flex-auto text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                    Gerenciamento de estado global com Context API, Cookies seguros e JWT.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg sm:text-xl">
                    🧩
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 text-gray-900">Arquitetura Limpa</h3>
                  <p className="mt-2 flex-auto text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                    Separação clara de responsabilidades: Services, Components e Hooks organizados.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO SOBRE O PROJETO */}
        <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Sobre o Projeto</h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Uma solução full-stack completa
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-gray-600 px-2">
                Este é um projeto full-stack que combina um frontend moderno em Next.js com um backend robusto em NestJS. 
                O frontend se conecta diretamente ao backend através de uma API REST, proporcionando uma experiência 
                de desenvolvimento completa e escalável.
              </p>
            </div>

            <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <a
                href="https://github.com/GabrielDev969/BaseFrontNextJs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <Globe size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Frontend
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">Next.js + TypeScript</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Interface moderna e responsiva construída com Next.js 16, TypeScript e Tailwind CSS.
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 group-hover:text-blue-700">
                  Ver repositório <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                </div>
              </a>

              <a
                href="https://github.com/GabrielDev969/BaseApiNestJs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                    <Server size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      Backend
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">NestJS + Prisma</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  API RESTful robusta desenvolvida com NestJS, Prisma ORM e PostgreSQL, seguindo Clean Architecture.
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600 group-hover:text-green-700">
                  Ver repositório <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                </div>
              </a>
            </div>

            <div className="mx-auto mt-8 sm:mt-12 max-w-2xl px-2">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">Conexão Frontend-Backend</h4>
                    <p className="text-xs sm:text-sm text-blue-800 leading-5 sm:leading-6">
                      O frontend se conecta ao backend através da variável de ambiente <code className="bg-blue-100 px-1 rounded text-xs sm:text-sm break-all">NEXT_PUBLIC_API_URL</code>. 
                      Você pode usar o backend fornecido ou conectar seu próprio backend NestJS seguindo a mesma estrutura de API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO COMO CONFIGURAR */}
        <section id="setup" className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Como Configurar</h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Guia de instalação e configuração
              </p>
            </div>

            <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {/* Backend */}
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                      <Server size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Backend (NestJS)</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Pré-requisitos</h4>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1 list-disc list-inside">
                        <li>Node.js (versão 18 ou superior)</li>
                        <li>pnpm (gerenciador de pacotes)</li>
                        <li>Docker e Docker Compose</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Passo a passo</h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">1. Configurar variáveis de ambiente</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>cp .env.example .env</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">2. Subir o banco de dados</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>docker-compose up -d</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">3. Instalar dependências</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>pnpm install</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">4. Configurar banco de dados</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto break-all">
                            <code>pnpm prisma migrate dev{'\n'}pnpm prisma generate{'\n'}pnpm prisma db seed</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">5. Iniciar aplicação</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>pnpm run start:dev</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://github.com/GabrielDev969/BaseApiNestJs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 hover:text-green-700"
                    >
                      Ver repositório completo <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                      <Globe size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Frontend (Next.js)</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Instalação rápida</h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">1. Instalar dependências</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>npm install</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">2. Configurar variável de ambiente</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto break-all">
                            <code>NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1</code>
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">3. Iniciar servidor de desenvolvimento</p>
                          <pre className="bg-gray-50 p-2 sm:p-3 rounded text-[10px] sm:text-xs overflow-x-auto">
                            <code>npm run dev</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                      <p className="text-xs text-blue-800 leading-5">
                        <strong>Nota:</strong> Certifique-se de que o backend está rodando antes de iniciar o frontend. 
                        A aplicação estará disponível em <code className="bg-blue-100 px-1 rounded break-all">http://localhost:3000</code>.
                      </p>
                    </div>

                    <a
                      href="https://github.com/GabrielDev969/BaseFrontNextJs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700"
                    >
                      Ver repositório completo <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DESENVOLVEDOR */}
        <section id="developer" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Desenvolvedor</h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Quem desenvolveu este projeto
              </p>
            </div>

            <div className="mx-auto mt-12 sm:mt-16 max-w-2xl">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-4 sm:gap-6">
                  <Image
                    src={`/api/image-proxy?url=${encodeURIComponent('https://github.com/GabrielDev969.png')}`}
                    alt="Gabriel"
                    width={96}
                    height={96}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover flex-shrink-0"
                    unoptimized
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Gabriel</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6">
                      Desenvolvedor full-stack apaixonado por criar soluções escaláveis e bem arquitetadas. 
                      Especializado em Next.js, NestJS e TypeScript, com foco em Clean Architecture e boas práticas de desenvolvimento.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                      <a
                        href="https://github.com/GabrielDev969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/gabriel-santos-b53632196/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                      >
                        <Linkedin size={14} className="sm:w-4 sm:h-4" />
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO COLABORADORES */}
        <ContributorsSection />

      </main>

      <Footer />
    </div>
  );
}