Cypress.Commands.add("goLoginPage", () => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.saucedemo.com/v1/index.html')
    // cy.visit("https://www.saucedemo.com/")
})

Cypress.Commands.add("login", (user, password) => {
    cy.get('input[data-test="username"]')
        .type(user)
    cy.get('input[data-test="password"]')
        .type(password)
    cy.get('#login-button')
        .click()
})

Cypress.Commands.add("noticeHave", (text) => {
    cy.get('h3[data-test="error"]')
        .should("be.visible")
        .and("have.text", text)
})

Cypress.Commands.add("logout", () => {
    cy.get('i.bm-burger-button')
        .click()
    cy.get('#logout_sidebar_link')
        .click()
})

Cypress.Commands.add("addProductToCart", () => {
    cy.contains('a', 'Backpack')
        .invoke('text')
        .then((nomeProduto) => {
            cy.contains('button', 'ADD TO CART')
                .first()
                .click()
            cy.get('a[href="./cart.html"]')
                .click()
            cy.get('.inventory_item_name').should('contain', nomeProduto)
        })
})

Cypress.Commands.add("removeProductToCart", () => {
    cy.get('.btn_secondary')
        .click()
    cy.contains('button', 'ADD TO CART')
        .first()
        .should('be.visible')
})

Cypress.Commands.add("continueShopping", () => {
    cy.get('.btn_secondary')
        .eq(1)
        .click()
        cy.get('.product_label')
        .should('have.text', 'Products')
})
