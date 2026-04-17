#  Casos de Teste — Sauce Demo

Este documento detalha os cenários de teste manuais executados no site [Sauce Demo](https://www.saucedemo.com/).

## Cenário 01: Login com Sucesso
- **Objetivo:** Validar se um usuário cadastrado consegue logar corretamente.
- **Passos:**
    1. Acessar o site https://www.saucedemo.com/
    2. Digitar `standard_user` no campo "Username"
    3. Digitar `secret_sauce` no campo "Password"
    4. Clicar no botão "Login"
- **Resultado Esperado:** O usuário deve ser redirecionado para a página de produtos.
- **Resultado Atual:** Passou conforme esperado.

## Cenário 02: Login com Senha Incorreta
- **Objetivo:** Validar o erro ao inserir credenciais inválidas.
- **Passos:**
    1. Acessar o site
    2. Digitar `standard_user`
    3. Digitar `senha_errada`
    4. Clicar no botão "Login"
- **Resultado Esperado:** Exibir a mensagem: "Epic sadface: Username and password do not match any user in this service".
- **Resultado Atual:** Passou conforme esperado.

## Cenário 03: Login de Usuário Bloqueado
- **Objetivo:** Validar comportamento de conta bloqueada.
- **Passos:**
    1. Acessar o site
    2. Digitar `locked_out_user`
    3. Digitar `secret_sauce`
    4. Clicar no botão "Login"
- **Resultado Esperado:** Exibir a mensagem: "Epic sadface: Sorry, this user has been locked out."
- **Resultado Atual:** Passou conforme esperado.

## Cypress
- **Fluxos Automatizados:**
  - Login com sucesso e tratamento de erros.
  - Fluxo completo de compra: seleção de produto, carrinho, checkout e confirmação de pedido.

### 2. Testes de API — JSONPlaceholder

- **API testada:** https://jsonplaceholder.typicode.com/
- **Ferramenta:** Postman

#### Cobertura de testes

- **GET:** Buscar post por ID
  - Validação de status code (200 OK)
  - Validação da estrutura da resposta (JSON)

- **POST:** Criação de novo post
  - Validação de status (201 Created)
  - Validação de dados retornados

- **PUT:** Atualização de post existente
  - Validação de status (200 OK)
  - Validação de alteração de conteúdo

- **DELETE:** Remoção de post
  - Validação de status (200 OK ou 204 No Content)

#### Testes negativos (erros)

- Buscar recurso inexistente
  - Status esperado: 404 Not Found
  - Validação de resposta vazia

- Criar recurso com dados inválidos
  - Validação de comportamento da API
  - Validação de tempo de resposta

- Deletar recurso inexistente
  - Status esperado: 404 Not Found

#### Testes de performance

- Validação de tempo de resposta da API
  - Tempo esperado: menor que 1000ms

#### Observações

A API utilizada é pública e simulada (JSONPlaceholder), portanto некоторые comportamentos podem não refletir uma API real (ex: aceitar dados inválidos). Ainda assim, os testes foram estruturados seguindo boas práticas de validação de APIs REST.
