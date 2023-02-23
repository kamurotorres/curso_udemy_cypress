/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => { 
    let tiempo=1000
    before(() => {   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get('[name="username"]').should('be.visible').clear().type('Admin')
        cy.wait(tiempo)
        cy.get('[name="password"]').should('be.visible').clear().type('admin123')
        cy.wait(tiempo)
        cy.get("[type='submit']").should("be.visible").click()
    })

    after(() => {   
        cy.wait(tiempo)
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should("be.visible").click()

    })

    it('test 1', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(tiempo)
    })

    it('test 2', () => {
        cy.get(':nth-child(2) > .oxd-main-menu-item').should("be.visible").click()
        cy.wait(tiempo)
    })

    

});