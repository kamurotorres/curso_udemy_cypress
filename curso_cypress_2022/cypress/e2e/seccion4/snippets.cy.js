//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
import 'cypress-file-upload'


describe('configuracion y uso de los snnipets', () => {
    it('Snnipet uno', () => {

        let tiempo= 15000
        cy.visit('https://demoqa.com/text-box')
        cy.title().should("eq","ToolsQA")

        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.get('[type="text"]').should('be.visible').type('Demo')
        cy.wait(tiempo)

        
        
    })

})