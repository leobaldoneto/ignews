<h1 align="center">
    ig.News - Next.js
</h1>

ADICIONAR IMAGEM

<p align="center">Blog de notícias headless e pagamento via stripe</p>

<p align="center">
 <a href="#sobre-o-projeto">Introdução</a> |
 <a href="#tecnologias">Tecnologias</a> |
 <a href="#configurações-necessárias">Instalação</a> |
 <a href="#licença">Licença</a> |
 <a href="#autor">Autor</a>
</p>

## Introdução

Um projeto feito junto ao curso [Ignite da Rocketseat](https://rocketseat.com.br/) para praticar conhecimentos do curso de ReactJS e NextJS. A aplicação contem posts de notícias alimentados pelo Prismic CMS, assinatura via Stripe e autenticação via Next-Auth.

Desenvolvida com o framework NextJS, foram aplicados conceitos de API Root, Server Side Rendering (SSR), Static Site Generation (SSG) e API externas como Stripe para pagamentos das assinaturas, NextAuth para autenticação com Github oauth, FaunaDB para armazenar dados dos assinantes em banco de dados NoSQL e Prismic CMS para adição e gerenciamento do conteúdo dos posts.

---

## Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação

- [FaunaDB](https://fauna.com/)
- [Next-Auth](https://next-auth.js.org/)
- [NextJS](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [ReactJS](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Stripe](https://stripe.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Testando o projeto

### **Requisitos**

Todo desenvolvimento foi feito no Ubuntu 20.04.

- [Git](https://git-scm.com/)
- [NodeJS 16.x](https://nodejs.org/en/download/package-manager/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

Serviços externos:

- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)

### **Instruções para Teste**

```bash
# Cópie o reposótorio para a pasta desejada
$ git clone https://github.com/leobaldoneto/ignews.git
# Entre na pasta
$ cd ignews

# Instale as dependências
$ npm install

# Crie uma cópia do arquivo .env.local.example, renomeie para .env.local e preencha as variáveis.
$ cp .env.local.example .env.local

# Utilize a CLI do Stripe para encaminhar os webhooks para seu servidor local
$ stripe listen --forward-to localhost:3000/api/webhooks

# Para iniciar a aplicação
$ npm run dev

```

---

## Licença

Distribuído sob a licença MIT.

---

## Desenvolvimento

Feito por Leobaldo Alcantara Neto 👨‍💻

[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/leobaldoneto/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/leobaldoneto)
