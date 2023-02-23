/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('Reto', () => {
    it('reto 1', () => {
        
       cy.visit('https://demoqa.com/webtables')
       //crear el registro
       cy.get("#addNewRecordButton").should("be.visible").click()
       cy.wait(1000)
       cy.get("#firstName").type("Kevin Alexis")
       cy.get("#lastName").type("Torres Alvarez")
       cy.get("#userEmail").type("nearriver1995@gmail.com")
       cy.get("#age").type("27")
       cy.get("#salary").type("1000000")
       cy.get("#department").type("Huila")
       cy.get("#submit").should("be.visible").click()
       //buscar el registro
       cy.get("#searchBox").type("kevin")
       //cy.get("#searchBox").clear()
       //editar registro
       cy.get('#edit-record-4').should("be.visible").click()
       cy.get("#firstName").clear().type("Kev Alexis")
       cy.get("#submit").should("be.visible").click()
       //buscar el registro
       cy.get("#searchBox").clear().type("kev")
       //eliminar registro
       cy.get('#delete-record-4').should("be.visible").click()
       //limipiar caja 
       cy.get("#searchBox").clear()
    })
})