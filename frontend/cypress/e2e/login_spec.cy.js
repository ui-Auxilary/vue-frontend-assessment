context('Test Valid login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('type into input fields', () => {
    cy.get('.input_username')
      .type('Coolusername')
      .should('have.value', 'Coolusername')

      cy.get('.input_password')
      .type('coolpassword')
      .should('have.value', 'coolpassword')

      cy.get('.form').submit()
      .next()

      cy.get('.modal')
      .should('have.length', 1)
    
      cy.get('.modal-status')
      .should('have.text', 'Status: 200')

      cy.get('.modal-message')
      .should('have.text', 'Login Successful')
  })
})

context('Test Invalid login no password', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('type username into userfield', () => {
    cy.get('.input_username')
      .type('Coolusername')
      .should('have.value', 'Coolusername')

      cy.get('.form').submit()
      .next()

      cy.get('.modal')
      .should('have.length', 1)
    
      cy.get('.modal-status')
      .should('have.text', 'Status: 401')

      cy.get('.modal-message')
      .should('have.text', 'Request failed with status code 401')
  })
})

context('Test Invalid login no username', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('type username into userfield', () => {
    cy.get('.input_password')
      .type('epic!@&*@$Y')
      .should('have.value', 'epic!@&*@$Y')

      cy.get('.form').submit()
      .next()

      cy.get('.modal')
      .should('have.length', 1)
    
      cy.get('.modal-status')
      .should('have.text', 'Status: 401')

      cy.get('.modal-message')
      .should('have.text', 'Request failed with status code 401')
  })
})

context('Test Empty login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('type username into userfield', () => {
      cy.get('.form').submit()
      .next()

      cy.get('.modal')
      .should('have.length', 1)
    
      cy.get('.modal-status')
      .should('have.text', 'Status: 401')

      cy.get('.modal-message')
      .should('have.text', 'Request failed with status code 401')
  })
})