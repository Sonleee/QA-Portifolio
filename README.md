#  QA Portfolio — Sauce Demo

Este repositório contém testes manuais, automação web e testes de API realizados no site [Sauce Demo](https://www.saucedemo.com/).

---

##  Testes Manuais

### Cenário 01: Login com Sucesso
- **Objetivo:** Validar login com credenciais válidas.
- **Passos:**
  1. Acessar o site
  2. Inserir usuário `standard_user`
  3. Inserir senha `secret_sauce`
  4. Clicar em Login
- **Resultado Esperado:** Redirecionamento para a página de produtos.
- **Resultado Atual:**  Passou

---

### Cenário 02: Login com Senha Incorreta
- **Objetivo:** Validar mensagem de erro para credenciais inválidas.
- **Resultado Esperado:** Exibir mensagem de erro de login.
- **Resultado Atual:**  Passou

---

### Cenário 03: Usuário Bloqueado
- **Objetivo:** Validar comportamento de usuário bloqueado.
- **Resultado Esperado:** Exibir mensagem de conta bloqueada.
- **Resultado Atual:**  Passou

---

##  Automação Web — Cypress

### Fluxos automatizados:

-  Login com sucesso
-  Login com erro
-  Adição de produtos ao carrinho
-  Remoção de produtos
-  Múltiplos itens no carrinho
-  Fluxo completo de checkout
-  Validação de formulário (erros de preenchimento)
-  Persistência de sessão (refresh)
-  Bloqueio de acesso sem login
-  Uso de dados dinâmicos nos testes

---

##  Testes de API — Postman

- **API:** https://jsonplaceholder.typicode.com/

###  Cobertura de testes

- **GET:** Consulta de dados
- **POST:** Criação de recurso
- **PUT:** Atualização de recurso
- **DELETE:** Remoção de recurso

---

### Testes negativos

- Requisição para recurso inexistente (404)
- Envio de dados inválidos
- Exclusão de recurso inexistente

---

### Testes de performance

- Validação de tempo de resposta (< 1000ms)

---

## Tecnologias utilizadas

- Cypress
- Postman
- JavaScript
- Git & GitHub

---

##  Observações

A API utilizada é pública e simulada (JSONPlaceholder), portanto alguns comportamentos podem não refletir APIs reais.

---

##  Autor

Desenvolvido por Leonardo Barbosa

🔗 GitHub: https://github.com/Sonleee/QA-Portifolio
🔗 LinkedIn: www.linkedin.com/in/leonardo-barbosa-depaula