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
        const response = await fetch(
          'https://api.github.com/repos/GabrielDev969/BaseFrontNextJs/contributors'
        );

        if (!response.ok) {
          throw new Error('Falha ao buscar colaboradores');
        }

        const data = await response.json();
        setContributors(data);
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
      <section id="contributors" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quem contribuiu com este projeto
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-pulse">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-4"></div>
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
      <section id="contributors" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quem contribuiu com este projeto
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-gray-600">
              {error || 'Ainda não há colaboradores. Seja o primeiro a contribuir!'}
            </p>
            <a
              href="https://github.com/GabrielDev969/BaseFrontNextJs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Ver no GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contributors" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Colaboradores</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Quem contribuiu com este projeto
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contributors.map((contributor) => (
            <a
              key={contributor.login}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={`/api/image-proxy?url=${encodeURIComponent(contributor.avatar_url)}`}
                  alt={contributor.login}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                  unoptimized
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {contributor.login}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Github size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {contributor.contributions} {contributor.contributions === 1 ? 'contribuição' : 'contribuições'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600 group-hover:text-blue-700">
                Ver perfil <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

