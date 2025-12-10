'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export function ContributorsSection() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributors() {
      try {
        // Buscar colaboradores de ambos os repositórios
        const [frontendResponse, backendResponse] = await Promise.allSettled([
          fetch('https://api.github.com/repos/GabrielDev969/BaseFrontNextJs/contributors'),
          fetch('https://api.github.com/repos/GabrielDev969/BaseApiNestJs/contributors')
        ]);

        const contributorsMap = new Map<string, Contributor>();

        // Processar colaboradores do frontend
        if (frontendResponse.status === 'fulfilled' && frontendResponse.value.ok) {
          const frontendData = await frontendResponse.value.json();
          frontendData.forEach((contributor: Contributor) => {
            contributorsMap.set(contributor.login, {
              ...contributor,
              contributions: contributor.contributions
            });
          });
        }

        // Processar colaboradores do backend e combinar
        if (backendResponse.status === 'fulfilled' && backendResponse.value.ok) {
          const backendData = await backendResponse.value.json();
          backendData.forEach((contributor: Contributor) => {
            const existing = contributorsMap.get(contributor.login);
            if (existing) {
              // Se já existe, soma as contribuições
              existing.contributions += contributor.contributions;
            } else {
              // Se não existe, adiciona
              contributorsMap.set(contributor.login, {
                ...contributor,
                contributions: contributor.contributions
              });
            }
          });
        }

        // Verificar se pelo menos um repositório retornou dados
        if (contributorsMap.size === 0) {
          // Se ambos falharam, verificar qual falhou
          if (frontendResponse.status === 'rejected' && backendResponse.status === 'rejected') {
            throw new Error('Falha ao buscar colaboradores de ambos os repositórios');
          }
        }

        // Converter Map para Array e ordenar por número de contribuições (decrescente)
        const combinedContributors = Array.from(contributorsMap.values()).sort(
          (a, b) => b.contributions - a.contributions
        );

        setContributors(combinedContributors);
      } catch (err) {
        setError('Não foi possível carregar os colaboradores');
        console.error('Erro ao buscar colaboradores:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <section id="contributors" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
            <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Quem contribuiu com este projeto
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 animate-pulse">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-200 mb-3 sm:mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || contributors.length === 0) {
    return (
      <section id="contributors" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
            <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Quem contribuiu com este projeto
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl text-center px-4">
            <p className="text-sm sm:text-base text-gray-600">
              {error || 'Ainda não há colaboradores. Seja o primeiro a contribuir!'}
            </p>
            <a
              href="https://github.com/GabrielDev969/BaseFrontNextJs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700"
            >
              Ver no GitHub <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contributors" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Quem contribuiu com este projeto
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contributors.map((contributor) => (
            <a
              key={contributor.login}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src={`/api/image-proxy?url=${encodeURIComponent(contributor.avatar_url)}`}
                  alt={contributor.login}
                  width={64}
                  height={64}
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover flex-shrink-0"
                  unoptimized
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                    {contributor.login}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Github size={12} className="text-gray-400 sm:w-3.5 sm:h-3.5" />
                    <span className="text-xs sm:text-sm text-gray-500">
                      {contributor.contributions} {contributor.contributions === 1 ? 'contribuição' : 'contribuições'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 group-hover:text-blue-700">
                Ver perfil <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

