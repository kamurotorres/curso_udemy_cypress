//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
import 'cypress-file-upload'


describe('invoke', () => {
    it('invoke text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        //vamos validar que el elemento html contenga el texto
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
        //validar label y llenar campo
        cy.get("[for='firstname']").invoke("text").as("label_name")
        cy.get("@label_name").should("contain","First name:").then(() => {
            cy.get("#firstname").type("Kevin Alexis")
        })
    })

    it('invoke estilos agregar ', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        cy.get("[for='firstname']").invoke("attr","style","color:blue; font-size: 50px").as("label_name")
    })

    it('invoke mostrar o cultar  ', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide")
        cy.wait(2000)
        cy.get("[for='firstname']").invoke("show")
        cy.get("#firstname").invoke("show","5s")
    })

    it('invoke retor  ', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should("eq","Input Validation")

        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(1000)

        cy.get("#firstname").should("be.visible").type("Kevin").then(() => {
            cy.wait(2000)
            cy.get("[for='surname']").invoke("show","6s")
            cy.get("#surname").invoke("show","5s").type("Torres Alvarez")
        })
    })

    it('invoke src   ', () => {
        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        cy.xpath("//img[contains(@class,'cbt')]").invoke("attr","src").should("include","sponsored-by-CBT.png")
    })

    it.only('invoke remove target   ', () => {
        cy.visit('https://dvwa.co.uk')
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        cy.xpath("").invoke("removeAttr","target").click({force:true})
    })
})