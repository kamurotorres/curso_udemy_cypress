/// <reference types="Cypress" />
//para que funciones los comandos de cypress
//poder usar xpath
require('cypress-xpath');

describe('Tipos de selectores', () => {
    it('Selecto por id', () => {
       cy.visit('https://demoqa.com/text-box')
       cy.title().should('eq','ToolsQA')
       cy.wait(1000)
       cy.get("#userName").should("be.visible",{timeout:5000}).type("Kevin")
       cy.get("#userEmail").should("be.visible").type("kevin@hotmail.com")
    })

    it('Selecto por atributo', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Kevin")
    })

    it('Selecto por xpath', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.xpath("//*[@id='userName']").should("be.visible").type("Kevin")
        
     })


     it('Selecto por contains', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Other").click()
        
     })

     it.only('Selecto por copyselector', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userNumber").should("be.visible").type("12345678")
        
     })
})