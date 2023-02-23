/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => { 
    let tiempo=1000
    before(() => {   
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })
    it('test', () => {
        cy.Bloque_reto("k","Torres","kevin@gmail.com","5555555555","calle 2e # 14-35","neiva","41001","www.kevin,cin","comentario para pruebas del demo que se realiza",500)
        cy.Validar_mensaje_campo2("//small[contains(@data-bv-result,'INVALID')]","Please enter more than 2 characters","Nombre")

    })
});