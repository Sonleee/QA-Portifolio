describe('Funcionalidade de Produtos - Sauce Demo', () => {

  beforeEach(() => {
    // Faz login antes de cada teste
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Deve ordenar produtos de A a Z', () => {
    // Seleciona ordenação A-Z
    cy.get('[data-test="product-sort-container"]').select('az')

    // Pega o primeiro produto e valida
    cy.get('.inventory_item_name').first()
      .should('have.text', 'Sauce Labs Backpack')
  })

  it('Deve ordenar produtos de Z a A', () => {
    // Seleciona ordenação Z-A
    cy.get('[data-test="product-sort-container"]').select('za')

    // Pega o primeiro produto e valida
    cy.get('.inventory_item_name').first()
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
  })

  it('Deve ordenar produtos por menor preço', () => {
    // Seleciona ordenação por menor preço
    cy.get('[data-test="product-sort-container"]').select('lohi')

    // Valida se o primeiro produto é o mais barato
    cy.get('.inventory_item_price').first()
      .should('have.text', '$7.99')
  })

  it('Deve ordenar produtos por maior preço', () => {
    // Seleciona ordenação por maior preço
    cy.get('[data-test="product-sort-container"]').select('hilo')

    // Valida se o primeiro produto é o mais caro
    cy.get('.inventory_item_price').first()
      .should('have.text', '$49.99')
  })

  it('Deve adicionar e remover produto do carrinho', () => {
    // Adiciona produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Valida badge do carrinho (deve mostrar 1)
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Remove produto
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Valida que o badge sumiu
    cy.get('.shopping_cart_badge').should('not.exist')
  })

})