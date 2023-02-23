//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');
//plugin drag a drop
import '@4tw/cypress-drag-drop'

describe('Drag and drop', () => {
    it('drag-drop imagenes', () => {
        let tiempo= 1000
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should("eq","The Internet")
        cy.wait(1000)
        cy.get("#column-a").drag("#column-b",{force:true})
    })

    it('drag-drop imagenes 2', () => {
        let tiempo= 1000
        cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
        cy.title().should("eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(tiempo)
        cy.get('#todrag > :nth-child(2)').drag("#mydropzone",{force:true})
        cy.wait(tiempo)
        cy.get('#todrag > :nth-child(3)').drag("#mydropzone",{force:true})
        cy.wait(tiempo)
        cy.get('#todrag > :nth-child(4)').drag("#mydropzone",{force:true})
        cy.wait(tiempo)
        cy.get('#todrag > :nth-child(5)').drag("#mydropzone",{force:true})
        
    })

    it('quitar _target para no carga nueva pagina', () => {
        let tiempo= 1000
        cy.visit('http://way2automation.com/')
        cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
        cy.contains("All Courses").trigger("mouseover")
        cy.contains("Selenium").click()
        cy.wait(tiempo)
        cy.get(".eicon-close").should("be.visible").click()
        //para remover un attrip
        cy.contains("elementobuscar").invoke("removeAttr","target").click()
    })

    it.only('Mover slider', () => {
        let tiempo= 1000
        cy.visit('https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html')
        cy.wait(tiempo)
        cy.get('#slider1 > .range > input').invoke("attr","value","90")
        cy.wait(tiempo)
        cy.get('#slider3 > .range > input').invoke("attr","value","90")
        cy.wait(tiempo)
        cy.get('#slider5 > .range > input').invoke("attr","value","90")

        
    })
})