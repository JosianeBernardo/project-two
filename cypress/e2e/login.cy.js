describe('login', () => {

  beforeEach(() => {
    cy.goLoginPage()
  })
  
  it('Login com sucesso', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.product_label')
      .should('be.visible')
      .and('have.text', 'Products')
  })

  it('Login com user inválido', () => {
    cy.login('standard', 'secret_sauce')
    cy.noticeHave('Epic sadface: Username and password do not match any user in this service')
  })

  it('Login com user bloqueado', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.noticeHave('Epic sadface: Sorry, this user has been locked out.')
  })
})