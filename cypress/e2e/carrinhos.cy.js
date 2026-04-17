describe('Funcionalidade de Carrinho e Logout - Sauce Demo', () => {

  beforeEach(() => {
    // Faz login antes de cada teste
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Deve adicionar múltiplos produtos ao carrinho', () => {
    // Adiciona 3 produtos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    // Valida badge com 3 itens
    cy.get('.shopping_cart_badge').should('have.text', '3')

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click()

    // Valida se os 3 produtos estão lá
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
  })

  it('Deve remover um produto específico do carrinho', () => {
    // Adiciona 2 produtos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click()

    // Remove apenas o primeiro produto
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Valida que só sobrou 1 produto
    cy.get('.cart_item').should('have.length', 1)
    cy.contains('Sauce Labs Bike Light').should('be.visible')
  })

  it('Deve continuar comprando após ir ao carrinho', () => {
    // Adiciona um produto e vai ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    // Clica em continuar comprando
    cy.get('[data-test="continue-shopping"]').click()

    // Valida que voltou para a página de produtos
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Deve realizar logout com sucesso', () => {
    // Abre o menu lateral
    cy.get('#react-burger-menu-btn').click()

    // Clica em logout
    cy.get('#logout_sidebar_link').click()

    // Valida que voltou para a tela de login
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})