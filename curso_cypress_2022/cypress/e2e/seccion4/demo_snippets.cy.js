/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo de la primer plantilla', () => { 
    it('demo uno', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/text-box') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })
});