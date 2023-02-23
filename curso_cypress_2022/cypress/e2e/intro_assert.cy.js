/// <reference types="Cypress" />
//para que funciones los comandos de cypress

describe('Introduccion a los asserts', () => {
    it("Demo de los Assert", () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.title().should('eq','ToolsQA')
       cy.wait(1000)
       
       cy.get("#firstName").should("be.visible").type("Juan")
       cy.wait(1000)
       cy.get("#lastName").should("be.visible").type("Juan")
       cy.wait(1000)
       cy.get("#userEmail").should("be.visible").should("be.enabled").type("juan@gmail.com")
    })
})