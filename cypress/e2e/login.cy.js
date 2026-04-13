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