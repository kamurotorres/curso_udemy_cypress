//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
import 'cypress-file-upload'


describe('Alias', () => {
    it('alias uno', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        //asignacion del alias
        cy.get("#firstname").should("be.visible").as("nom")

        cy.get("@nom").type("kevin")

        cy.get("#surname").should("be.visible").as("ap")

        cy.get("@ap").type("Torres Alvarez")

        cy.get("#age").should("be.visible").as("age")

        cy.get("@age").type("27")

        cy.get("#country").should("be.visible").as("country")

        cy.get("@country").select("Colombia").should("have.value","Colombia")

        cy.get("#notes").should("be.visible").as("note")

        cy.get("@note").type("Ejemplo de prueba ")

        cy.get("[type='submit']").click({force:true})

      
    })

})