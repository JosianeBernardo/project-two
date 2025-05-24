describe('shopping cart', () => {
    beforeEach(() => {        
        cy.goLoginPage()
        cy.login('standard_user', 'secret_sauce')
    })

    //Devido a plataforma salvar o produto enviado para o carrinho mesmo após realizar 
    //o logout, foi necessário inserir uma funcão de remover o produto do carrinho 
    //para todos os cenários que já não o faziam para não impactar na execução do 
    //cenário seguinte.

    it('Adicionar produto no carrinho', () => {
        cy.addProductToCart()
        cy.continueShopping()
        cy.removeProductToCart()
        
    })

    it('Remover produto do carrinho', () => {
        cy.addProductToCart()
        cy.get('.btn_secondary')
            .first()
            .click()
        cy.get('.cart_quantity')
            .should('not.exist')
    })

    it('Acessar o carrinho de compras pelo ícone do menu superior', () => {
        cy.contains('button', 'ADD TO CART')
            .first()
            .click()
        cy.get('a[href="./cart.html"]')
            .click()
        cy.get('.subheader')
            .should('have.text', 'Your Cart')
        cy.continueShopping()
        cy.removeProductToCart()
    })

    it('Continuar comprando após acessar o carrinho', () => {
        cy.addProductToCart()
        cy.continueShopping()
        cy.removeProductToCart()
    })

    it('Enviar os produtos do carrinho para iniciar o checkout', () => {
        cy.addProductToCart()
        cy.get('.btn_action')
            .click()
        cy.get('.subheader')
            .should('have.text', 'Checkout: Your Information')
    })
})