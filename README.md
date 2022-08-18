# FrontendContest

Este projeto utiliza o workspace gerado pelo [Nx dev](https://nx.dev/). O mock foi construido
usando [NestJS](https://nestjs.com/), com o [LowDB v1](https://github.com/typicode/lowdb/tree/v1.0.0).

O app *api* é um mock da API.  
O app *frontend-contest* é o app a ser desenvolvido

## Instalando

Instale o yarn, o nx e o @nwrl/cli globalmente:

`npm install -g yarn nx @nrwl/cli`

Clone o repositório e execute `yarn`

Em um terminal, execute `nx run frontend-contest:serve`, para iniciar a aplicação em modo
desenvolvimento.

Em outro terminal, execute `nx run api:serve`, para iniciar o mock da API.

## Objetivos

Esta é uma aplicação simples, com uma tela de login, uma lista de usuários, e um formulário de cadastro e edição de
usuários.  
A tela de login só pode ser acessada enquanto o usuário não estiver logado.  
As telas de lista e edição de usuário só podem ser acessadas quando o usuário estiver logado.

### Requisitos

* controle de acesso autenticado/não autenticado
* listar, criar, editar e excluir usuários
* utilizar Angular Material
* utilizar [NgRx](https://ngrx.io/guide/store/walkthrough)
* seguir as convenções do Nx
  * ao final da construção, deve ser possível executar `nx run frontend-contest:lint`, sem erros

## API

* Na raíz do repositório há um
  arquivo [Insomnia.json](https://github.com/cguilhermef/frontend-contest-2022-b/blob/main/Insominia.json) que contem
  todos os endpoints da API, com exemplos de uso.
* O banco de dados da API volta ao estado original sempre que a API for reiniciada.
* Os tokens tem 1h de expiração e vão continuar funcionando mesmo que o usuário seja excluído, pois não foi implementada
  uma rotina de revogação.

