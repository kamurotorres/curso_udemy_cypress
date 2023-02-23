/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('Opciones click', () => {
    it('Click sencillos ', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.title().should('eq','OrangeHRM')
       cy.wait(1000)
       
       //cy.get("#btnLogin").should("be.visible").click()
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
       cy.get("[name='password']").should("be.visible").type("admin123")
       cy.get(".oxd-button").should("be.visible").click()
       cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
    })


    it('Click forzado ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        
        //cy.get("#btnLogin").should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get("[name='password']").should("be.visible").type("admin123")
        cy.get(".oxd-button").should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force:true})
     })

     it.only('Click por coordenadas (x-y) ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        
        //cy.get("#btnLogin").should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get("[name='password']").should("be.visible").type("admin123")
        cy.get(".oxd-button").should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force:true})
        cy.get(".oxd-topbar-header-breadcrumb").should("be.visible").click(50,3)
     })
})