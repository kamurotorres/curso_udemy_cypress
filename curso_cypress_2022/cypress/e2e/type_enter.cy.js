/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('Funciones para type', () => {
    it('type enter', () => {
       cy.visit('https://www.google.com/')
       cy.title().should('eq','Google');
       cy.wait(2000)
       cy.get("[name='q']").type("Cypress.io {enter}")
       //{enter} es para que despues de terminar algo se presione la tecla enter
       cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    })
})