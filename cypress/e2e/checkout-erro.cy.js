describe('Checkout com erro - Sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Deve exibir erro ao não preencher nome', () => {
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
    cy.contains('First Name is required')
  })

  it('Deve exibir erro ao não preencher CEP', () => {
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

})