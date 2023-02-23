/// <reference types="Cypress" />
//para que funciones los comandos de cypress

//se agrega la linea para que pueda usar el tab
require('cypress-plugin-tab')

describe('Ejemplo funcion tab', () => {
    it.only('type con tab', () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.title().should('eq','ToolsQA')
       cy.wait(1000)
       //usando tab
       cy.get("#firstName").type("rodrigo").tab().
       type("villanueva").tab().
       type("kevin@gmail.com")
       cy.wait(2000)
    })

})