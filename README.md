# Loja de Games React

Desenvolvido por **Bianca Caetano** — Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bia-caetano)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/bia024)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:beahreis4@gmail.com)

---

Aplicação front-end de uma loja de games desenvolvida com React e TypeScript, consumindo uma API REST construída com NestJS.

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| [React](https://react.dev/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5 |
| [Vite](https://vitejs.dev/) | 6 |
| [Tailwind CSS](https://tailwindcss.com/) | 4 |
| [React Router DOM](https://reactrouter.com/) | 7 |
| [Axios](https://axios-http.com/) | 1 |
| [React Spinners](https://www.davidhu.io/react-spinners/) | 0.15 |
| [Lucide React](https://lucide.dev/) | 0.511 |

---

## Como executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## Backend

API deployada no Render, sem autenticação:

```
https://lojagames-nest.onrender.com
```

Documentação Swagger: https://lojagames-nest.onrender.com/swagger

---

## TODO

- [x] Configuração do projeto com Vite, React e TypeScript
- [x] Configuração do Tailwind CSS
- [x] Models Categoria e Produto
- [x] Service com os métodos listar, cadastrar, atualizar e deletar
- [x] Componente Navbar
- [x] Componente Footer
- [x] Página Home
- [x] Página Cadastro
- [x] Página Login
- [x] CRUD de Categoria (ListarCategorias, FormCategoria, DeletarCategoria)
- [x] FormProduto com select de categoria
- [x] Configuração de rotas com React Router DOM
- [ ] ListarProdutos com cards de produto
- [ ] DeletarProduto
- [ ] Funcionalidade de busca na Navbar
- [ ] Página de Perfil
- [ ] Página de Carrinho

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
