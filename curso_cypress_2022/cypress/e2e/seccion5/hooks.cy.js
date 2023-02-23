/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks', () => { 
    before(() => {
        cy.log("*********** -- principio de todo-- ************")
        
    })

    beforeEach(() => {
        cy.log("Esto se repite en cada unos de los test muy importante")
    })

    afterEach(() => {
        cy.log("Esto se hace al final de todos los test")
    })

    after(() => {
        cy.log("********** ultimo ciclo - final de todo *****************")
        cy.wait(2000)
        cy.visit('https://demoqa.com/')
    })

    it("test 1", () => {
        cy.log("test uno")
    })

    it("test 2", () => {
        cy.log("test dos")
    })

    it("test 3", () => {
        cy.log("test tres")
    })

});