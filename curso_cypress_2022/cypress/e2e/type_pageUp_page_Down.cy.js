/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('type pageup, page dowm', () => {
    it.only('page up primero ', () => {
       cy.visit("https://demoqa.com/text-box")
       cy.title().should('eq','ToolsQA')
       cy.wait(1000)
       //desplaza  hacia arriba
       cy.get("#userName").type('{pageup}')
       cy.wait(2000)
       
    })

    it('page down', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //desplaza hacia abajo
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
     })

     it.only('page ultimo ', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //desplaza hacia abajo
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
     })
})