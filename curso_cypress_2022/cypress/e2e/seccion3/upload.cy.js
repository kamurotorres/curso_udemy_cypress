//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
import 'cypress-file-upload'


describe('subir imagenes', () => {
    it('Cargar imagenes', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should("eq","ToolsQA")
        cy.wait(1000)
        
        const ruta = 'img1.jpg'

        cy.get('[type="file"]').attachFile(ruta)
    })

})