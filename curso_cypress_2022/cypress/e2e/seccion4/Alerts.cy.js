//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
import 'cypress-file-upload'


describe('Alertas en cypress o modales', () => {
    it('Alerta uno', () => {
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        cy.wait(1000)
        cy.xpath("//a[@href='#myModal0']").click()
        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({force:true})
        cy.wait(1000)
        cy.xpath("//a[@href='#myModal0']").click()
        cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click({force:true})
    })

})