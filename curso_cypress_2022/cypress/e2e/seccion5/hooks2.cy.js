/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => { 

    before(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    })

    it('checkear todos', () => {
        cy.get("[type='checkbox']").check().should("be.checked")
    })

    it('descheckear todos', () => {
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it('chekear uno', () => {
        cy.xpath("//input[contains(@id,'isAgeSelected')]").check().should("be.checked")
    })

});