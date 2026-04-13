describe('template spec', () => {
  it('passes', () => {
    describe('Funcionalidade de Login - Sauce Demo', () => {
      
      beforeEach(() => {
        // Visita o site antes de cada teste
        cy.visit('https://www.saucedemo.com/')
      })
    
      it('Deve realizar login com sucesso', () => {
        // Digita usuário e senha
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
    
        // Clica no botão
        cy.get('[data-test="login-button"]').click()
    
        // Valida se chegou na página de produtos
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
      })
    
      it('Deve exibir mensagem de erro ao errar a senha', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('senha_errada')
        cy.get('[data-test="login-button"]').click()
    
        // Valida a mensagem de erro
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
      })
    
    })
  })
})
it('Deve adicionar produto ao carrinho e finalizar compra', () => {

  // Login
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  // Adicionar produto ao carrinho
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

  // Ir para o carrinho
  cy.get('.shopping_cart_link').click()

  // Validar produto no carrinho
  cy.contains('Sauce Labs Backpack').should('be.visible')

  // Ir para checkout
  cy.get('[data-test="checkout"]').click()

  // Preencher dados
  cy.get('[data-test="firstName"]').type('Teste')
  cy.get('[data-test="lastName"]').type('QA')
  cy.get('[data-test="postalCode"]').type('12345')

  // Continuar
  cy.get('[data-test="continue"]').click()

  // Validar resumo da compra
  cy.contains('Checkout: Overview').should('be.visible')

  // Validar preço total da compra
  cy.get('.summary_total_label').should('contain', '$')

  // Finalizar compra
  cy.get('[data-test="finish"]').click()

  // Validar sucesso
  cy.contains('Thank you for your order!').should('be.visible')
})