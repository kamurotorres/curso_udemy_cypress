import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given('Abrir el navegador principal',() => {
    cy.visit('https://demoqa.com/text-box') 
})

When('Cargando el nombre',() => {
    cy.Texto_visible("#userName","Kevin Torres",1000)
})

When('Cargando el email',() => {
    cy.Texto_visible("#userEmail","kevin@gmail.com",1000)
    
})

And('Cargando la direccion',() => {
    cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]","Direccion1",1000)
})

Then('Validar el titulo de la pagina',() => {
    cy.title().should('eq','ToolsQA')
})