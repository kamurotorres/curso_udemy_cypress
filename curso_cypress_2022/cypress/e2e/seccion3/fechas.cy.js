//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
//para usar tab
require('cypress-plugin-tab')
//plugin drag a drop
import '@4tw/cypress-drag-drop'

describe('Fecha', () => {
    it('fecha uno', () => {
        let tiempo= 1000
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1000)
        //dar click a elemento selecciona valor
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").click()
        cy.get('.today').first().click({force:true})
    })

    it('fecha dos', () => {
        let tiempo= 1000
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1000)
        //dar click a elemento selecciona valor
        cy.get('[placeholder="Start date"]').should("be.visible").type("08/11/2022 {esc}")
        cy.get('[placeholder="End date"]').should("be.visible").type("09/11/2022 {esc}")

    })

    it('fecha tres', () => {
        let tiempo= 1000
        cy.visit('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html')
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1000)
        //dar click a elemento selecciona valor
        cy.get('[placeholder="Start date"]').should("be.visible").type("08/11/2022 {esc}").tab().type("09/11/2022 {esc}")

    })
})