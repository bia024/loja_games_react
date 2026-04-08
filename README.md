# Loja de Games React

Desenvolvido por **Bianca Caetano** — Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bia-caetano)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/bia024)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:beahreis4@gmail.com)

---

Esse projeto é o front-end de uma loja de games, desenvolvido como parte da minha jornada de aprendizado em desenvolvimento web. A aplicação consome uma API REST feita com NestJS e cobre o CRUD completo de categorias e produtos.

Foi construído com React, TypeScript e Tailwind CSS, seguindo boas práticas de componentização e organização de código.

---

## O que foi usado

| Tecnologia | Versão |
|---|---|
| [React](https://react.dev/) | 19.2.4 |
| [TypeScript](https://www.typescriptlang.org/) | 6.0.2 |
| [Vite](https://vitejs.dev/) | 8.0.4 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.2.2 |
| [React Router DOM](https://reactrouter.com/) | 7.14.0 |
| [Axios](https://axios-http.com/) | 1.15.0 |
| [React Spinners](https://www.davidhu.io/react-spinners/) | 0.17.0 |
| [Lucide React](https://lucide.dev/) | 1.7.0 |

---

## Como rodar na sua máquina

Clone o repositório, instale as dependências e rode:

```bash
npm install
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
```

---

## Backend

A API está deployada no Render. Na primeira requisição pode demorar um pouco para responder — é normal, o servidor hiberna quando fica sem uso.

```
https://lojagames-nest.onrender.com
```

Documentação completa: https://lojagames-nest.onrender.com/swagger

---

## O que já está pronto e o que ainda vem por aí

- [x] Configuração do projeto com Vite, React e TypeScript
- [x] Tailwind CSS
- [x] Models Categoria e Produto
- [x] Service com listar, cadastrar, atualizar e deletar
- [x] Navbar, Footer e Home
- [x] Cadastro e Login
- [x] CRUD completo de Categoria
- [x] Formulário de Produto com seleção de categoria
- [x] Rotas com React Router DOM
- [ ] Listagem de produtos com cards
- [ ] Deletar produto
- [ ] Busca de produtos na Navbar
- [ ] Página de Perfil
- [ ] Carrinho de compras

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
