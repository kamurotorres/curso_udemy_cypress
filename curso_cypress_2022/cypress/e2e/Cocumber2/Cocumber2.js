import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given('Abrir_navegador_principal',() => {
    cy.visit('https://demoqa.com/text-box') 
})

When('Cargando el nombre {word}',(name) => {
    cy.Texto_visible("#userName",name,1000)
})

When('Cargando el email {word}',(email) => {
    cy.Texto_visible("#userEmail",email,1000)
    
})

When('Cargando la direccion {word}',(dir1) => {
    cy.Texto_visible("#currentAddress",dir1,1000)
})


When('Cargando la direccion2 {word}',(dir2) => {
    cy.Texto_visible("#permanentAddress",dir2,1000)
})

When('Click en button',() => {
    cy.Click_force("#submit",1000)
})


Then('Validar el titulo de la pagina',() => {
    cy.title().should('eq','DEMOQA')
})
