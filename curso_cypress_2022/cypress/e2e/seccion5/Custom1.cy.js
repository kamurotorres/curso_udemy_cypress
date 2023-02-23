/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => { 
    let tiempo=1000
    before(() => {   
        cy.visit('/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })
    it('Demo uno', () => {
        cy.Texto_visible("#userName","Kevin Torres",1000)
        cy.Texto_visible("#userEmail","kevin@gmail.com",1000)
        cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]","Direccion1",1000)
        cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]","Direccion2",1000)
        cy.Click_normal("#submit",1000)
        
    })

    it('Demo dos llamado funcion por bloque', () => {
        cy.Bloque_ToolsQA("Kevin Torres","kevin@gmail.com","direccion uno","direccion dos",600)
    })


   
});