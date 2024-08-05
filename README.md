# API AdonisJS

Este é o README para o projeto de API que utiliza o framework AdonisJS para criar um CRUD (Create, Read, Update, Delete) utilizando o banco de dados SQLite. O projeto consiste em duas tabelas: "momentos" e "comentarios", que possuem um relacionamento entre si.

## Requisitos

Certifique-se de ter as seguintes dependências instaladas em seu ambiente de desenvolvimento:

- Node.js
- AdonisJS


## Executando a API

Para iniciar a API, execute os seguintes comandos:

1. Execute `npm install` para instalar as dependências do projeto.
2. Execute `node ace serve` para iniciar o servidor de desenvolvimento.

A API estará disponível em `http://localhost:3333/api`.

## Rotas

A API possui as seguintes rotas:

- `GET /moments`: Retorna todos os momentos cadastrados.
- `GET /moments/:id`: Retorna um momento específico com base no ID.
- `POST /moments`: Cria um novo momento.
- `PUT /moments/:id`: Atualiza um momento existente.
- `DELETE /moments/:id`: Exclui um momento existente.


- `POST /momentos/:momentoId/comments`: Cria um novo comentário para um momento.