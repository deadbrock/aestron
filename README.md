# Aestron Tecnologia - Site Institucional

Site institucional moderno desenvolvido com Next.js 14, TypeScript e Tailwind CSS para a empresa Aestron Tecnologia.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Fontes Google** - Inter e Space Grotesk

## 🎨 Design

O site foi desenvolvido com um design moderno e clean, inspirado em startups tecnológicas como Notion, Linear e Vercel, mas com identidade própria.

### Paleta de Cores

- **Azul Escuro**: `#0A1A2F` - Background principal e textos
- **Azul Primário**: `#1A73E8` - Destaques e CTAs
- **Branco**: `#FFFFFF` - Backgrounds e textos claros
- **Cinza Sofisticado**: `#94A3B8` - Textos secundários e bordas

## 📁 Estrutura do Projeto

```
aestron-site/
├── app/
│   ├── api/
│   │   └── contato/
│   │       └── route.ts          # API route para formulário de contato
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Página individual de post
│   │   └── page.tsx              # Listagem de posts
│   ├── projetos/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detalhes do projeto
│   │   └── page.tsx              # Portfólio de projetos
│   ├── sobre/
│   │   └── page.tsx              # Página sobre nós
│   ├── servicos/
│   │   └── page.tsx              # Página de serviços
│   ├── area-cliente/
│   │   └── page.tsx              # Área do cliente (login)
│   ├── contato/
│   │   └── page.tsx              # Página de contato
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Estilos globais
├── components/
│   ├── Navbar.tsx                # Navegação principal
│   ├── Footer.tsx                # Rodapé
│   ├── HeroSection.tsx           # Seção hero da homepage
│   ├── ServicesSection.tsx       # Seção de serviços
│   ├── Features.tsx              # Diferenciais
│   ├── ProjectsSection.tsx       # Projetos em destaque
│   ├── CTA.tsx                   # Call-to-action
│   └── ContactForm.tsx           # Formulário de contato
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🛠️ Instalação

1. **Clone o repositório ou navegue até a pasta do projeto**

```bash
cd aestron-site
```

2. **Instale as dependências**

```bash
npm install
```

ou

```bash
yarn install
```

ou

```bash
pnpm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

ou

```bash
yarn dev
```

ou

```bash
pnpm dev
```

4. **Acesse o site**

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎯 Funcionalidades

### Páginas Implementadas

1. **Home** (`/`)
   - Hero section com animações
   - Seção de serviços
   - Diferenciais da empresa
   - Projetos em destaque
   - Call-to-action final

2. **Sobre Nós** (`/sobre`)
   - História da empresa
   - Missão, visão e valores
   - Equipe (placeholders)

3. **Serviços** (`/servicos`)
   - Listagem completa de serviços
   - Cards interativos
   - Detalhes de cada serviço

4. **Projetos** (`/projetos`)
   - Portfólio de projetos
   - Páginas individuais de cada projeto
   - Tecnologias utilizadas

5. **Blog** (`/blog`)
   - Listagem de posts
   - Páginas individuais de posts
   - Categorias e metadados

6. **Área do Cliente** (`/area-cliente`)
   - Formulário de login (frontend apenas)
   - Estrutura inicial para futuras implementações

7. **Contato** (`/contato`)
   - Formulário funcional
   - Integração com API route
   - Informações de contato

### Componentes Reutilizáveis

- **Navbar**: Navegação fixa com menu mobile responsivo
- **Footer**: Rodapé com links e informações
- **HeroSection**: Seção hero com animações
- **ServicesSection**: Grid de serviços
- **Features**: Diferenciais da empresa
- **ProjectsSection**: Projetos em destaque
- **CTA**: Call-to-action reutilizável
- **ContactForm**: Formulário de contato com validação

## 🔧 Configuração da API de Contato

O formulário de contato está configurado com uma API route em `/app/api/contato/route.ts`. Atualmente, ele apenas registra os dados no console.

Para implementar o envio real de emails, você pode:

1. **Usar Nodemailer**:
```bash
npm install nodemailer
```

2. **Usar Resend** (recomendado):
```bash
npm install resend
```

3. **Usar SendGrid**:
```bash
npm install @sendgrid/mail
```

4. **Integrar com banco de dados** para salvar os contatos

Exemplo de implementação com Resend está comentado no arquivo `app/api/contato/route.ts`.

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    dark: "#0A1A2F",
    blue: "#1A73E8",
    white: "#FFFFFF",
    gray: "#94A3B8",
  },
}
```

### Fontes

As fontes são carregadas via Google Fonts no `app/layout.tsx`. Você pode alterar para outras fontes se desejar.

## 📱 Responsividade

O site é totalmente responsivo e foi testado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente o Next.js
4. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📄 Licença

Este projeto foi desenvolvido para a Aestron Tecnologia.

## 🤝 Contribuindo

Este é um projeto privado da Aestron Tecnologia. Para sugestões ou melhorias, entre em contato através do formulário no site.

---

Desenvolvido com ❤️ pela equipe Aestron Tecnologia

"# aestron" 
