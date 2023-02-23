/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => { 
    let tiempo=1000
    before(() => {   
        cy.visit('url') 
        cy.title().should('eq','titulo')
        cy.wait(tiempo)
    })
    it('test', () => {
        let tiempo=1000
        cy.visit('url') 
        cy.title().should('eq','titulo')
        cy.wait(tiempo)
    })
});