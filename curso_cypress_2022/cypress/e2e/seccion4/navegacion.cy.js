/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navegacion entre pagina', () => { 
    it('Back - Forward', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(tiempo)

        //ir atras
        cy.go("back")
        cy.go("back")

        //ir adelante
        cy.go("forward")
        cy.go("forward")
    })


    it.only('Reaload', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('kevin')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('kevin@gmail.com')
        cy.wait(tiempo)
        //recarga la pagina
        cy.reload()

        cy.wait(tiempo)

        cy.go("back")
    })
});