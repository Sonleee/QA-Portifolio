describe('Funcionalidade de Login - Sauce Demo', () => {

  beforeEach(() => {
    // Visita o site antes de cada teste
    cy.visit('https://www.saucedemo.com/')
  })

  it('Deve realizar login com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Deve exibir mensagem de erro ao errar a senha', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Deve adicionar produto ao carrinho e finalizar compra', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.contains('Checkout: Overview').should('be.visible')
    cy.get('.summary_total_label').should('contain', '$')
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
  })

  it('Deve manter o usuário logado após refresh', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.reload()

    cy.url().should('include', '/inventory.html')
  })

  it('Não deve acessar página interna sem login', () => {
  cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })

  cy.url().should('include', 'saucedemo.com')
  cy.get('[data-test="login-button"]').should('be.visible')
  })

})