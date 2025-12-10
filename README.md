# 🚀 Base Front Next.js

Frontend moderno desenvolvido em Next.js 16 com TypeScript, seguindo Clean Architecture e boas práticas de desenvolvimento.

## 📋 Sobre o Projeto

Este é o frontend de uma aplicação full-stack que se conecta ao backend NestJS. O projeto foi desenvolvido com foco em:

- ⚡ Performance e otimização
- 🛡️ Autenticação segura com JWT e cookies httpOnly
- 🧩 Arquitetura limpa e organizada
- 📱 Design responsivo
- 🔄 Refresh token automático

## 🔗 Repositórios

- **Frontend (este repositório):** [BaseFrontNextJs](https://github.com/GabrielDev969/BaseFrontNextJs)
- **Backend:** [BaseApiNestJs](https://github.com/GabrielDev969/BaseApiNestJs)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)
- Backend NestJS rodando (veja [BaseApiNestJs](https://github.com/GabrielDev969/BaseApiNestJs) para instruções)

## 🚀 Como começar

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/GabrielDev969/BaseFrontNextJs.git
cd BaseFrontNextJs
```

### 2️⃣ Instalar dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e configure a URL da API:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

> **Nota:** Ajuste a URL conforme a configuração do seu backend. O backend padrão roda em `http://localhost:3001/api/v1`.

### 4️⃣ Iniciar o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 🔧 Scripts disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Produção
npm run build        # Compila o projeto para produção
npm run start        # Inicia o servidor em modo produção

# Qualidade de código
npm run lint         # Executa o linter
npm run lint:fix     # Corrige problemas do linter automaticamente
```

## 🛠️ Tecnologias utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React Context API** - Gerenciamento de estado global
- **Lucide React** - Ícones
- **Cookies httpOnly** - Autenticação segura

## 📁 Estrutura do projeto

```
base_front_next/
├── app/                    # Rotas e páginas (App Router)
│   ├── dashboard/         # Páginas do dashboard
│   ├── login/             # Página de login
│   ├── register/          # Página de registro
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── features/          # Componentes de features
│   │   └── auth/          # Componentes de autenticação
│   └── layout/            # Componentes de layout
├── contexts/              # Contexts React
│   └── AuthContext.tsx    # Context de autenticação
├── services/              # Serviços e APIs
│   ├── auth/             # Serviços de autenticação
│   └── httpClient.ts      # Cliente HTTP configurado
├── types/                 # Tipos TypeScript
├── proxy.ts               # Middleware/Proxy do Next.js
└── public/                # Arquivos estáticos
```

## 🔐 Autenticação

O projeto utiliza autenticação baseada em JWT com:

- **Access Token** - Armazenado em cookie httpOnly
- **Refresh Token** - Armazenado em cookie httpOnly
- **Renovação automática** - O sistema renova tokens automaticamente quando expiram
- **Proteção de rotas** - Middleware protege rotas do dashboard

## 🔗 Conexão com o Backend

O frontend se conecta ao backend através da variável de ambiente `NEXT_PUBLIC_API_URL`. 

**Importante:** Certifique-se de que o backend está rodando antes de iniciar o frontend. Veja as instruções do backend em [BaseApiNestJs](https://github.com/GabrielDev969/BaseApiNestJs).

### Endpoints principais

- `POST /auth/login` - Login
- `POST /auth/signup` - Registro
- `POST /auth/logout` - Logout
- `POST /auth/refresh` - Renovar token
- `GET /auth/me` - Obter dados do usuário

## 👨‍💻 Desenvolvedor

**Gabriel** - [GitHub](https://github.com/GabrielDev969)

## 📝 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📚 Recursos adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
