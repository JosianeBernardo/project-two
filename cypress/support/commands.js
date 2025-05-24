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