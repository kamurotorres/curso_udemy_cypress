/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('Validar title de pagina', () => {
    it("Test validar el titulo", () => {
       cy.visit("https://demoqa.com/text-box");
       cy.title().should('eq','ToolsQA');
       cy.log("ok la funcion title funciona bien");
    })
})