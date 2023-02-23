describe('Primer test con cypress', () => {
    it('Esto es hola mundo version 10', () => {
       cy.log("hola mundo")
       //cy.visit('https://testingqarvn.com.es/datos-personales/') 
       cy.get("#wsf-1-field-21").type("rodrigo")
       cy.get("#wsf-1-field-22").type("torres")
       cy.get("#wsf-1-field-23").type("rodrigo@gmail.com")
       cy.get("#wsf-1-field-24").type("78787875")
       cy.get("#wsf-1-field-28").type("demo de la direccion")
       cy.get("#wsf-1-field-27").click()
       cy.wait(3000)
    })
})