/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('reto2', () => {
    it('reto2', () => {
       cy.visit('https://computer-database.gatling.io/computers')
       //buscar un elemento
        cy.get("#searchbox").should("be.visible").type("ACER")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
        //agregar un computador
        cy.get("#add").should("be.visible").click();
        cy.get("#name").should("be.visible").type("JumpCorp");
        cy.get("#introduced").should("be.visible").type("2012-02-22");
        cy.get("#discontinued").should("be.visible").type("2014-02-22");
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16")
        cy.get("input[value='Create this computer']").should("be.visible").click()
        cy.wait(2000)
        //buscar un elemento
        cy.get("#searchbox").should("be.visible").type("JumpCorp")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
    })
})