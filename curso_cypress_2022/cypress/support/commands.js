// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//creacion de la primera funciona personalizada

Cypress.Commands.add('Texto_visible', (selector,texto,t) => {
    let tiempo = t
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_visible_xpath', (selector,texto,t) => {
    let tiempo = t
    cy.xpath(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_normal', (selector,t) => {
    let tiempo = t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force', (selector,t) => {
    let tiempo = t
    cy.get(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force_xpath', (selector,t) => {
    let tiempo = t
    cy.xpath(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Validar_mensaje_campo', (selector,mensa,nombre_campo) => {
    cy.xpath(selector).should("be.visible").then((val) => {
        let dato = val.text()
        cy.log("el valor del log es:" +dato)
        let mensaje = mensa
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("****************")
            cy.log("el " + nombre_campo + " no es valido")
            cy.log("****************")
        }
    } )
})

Cypress.Commands.add('Validar_mensaje_campo2', (selector,mensa,nombre_campo) => {
    cy.xpath(selector).should("be.visible").should("contain",mensa).then((val) => {
        cy.log("****************")
        cy.log("el " + nombre_campo + " no es valido")
        cy.log("****************")
        
    } )
})

// funiones por conjunto o completas
// creando funcion principal

Cypress.Commands.add('Bloque_ToolsQA', (name,email,dir1,dir2,t) => {
    let tiempo = t
    cy.get("#userName").should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get("#permanentAddress").should("be.visible").type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should("be.visible").click({force:true})
})


//funcion por conjunto para reto

Cypress.Commands.add('Bloque_reto',(name,last,email,phone,address,city,zcode,pag,comment,t) =>{
    let tiempo = t
    cy.get("[name='first_name']").clear().should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get("[name='last_name']").clear().should("be.visible").type(last)
    cy.wait(tiempo)
    cy.get("[name='email']").clear().should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get("[name='phone']").clear().should("be.visible").type(phone)
    cy.wait(tiempo)
    cy.get("[name='address']").clear().should("be.visible").type(address)
    cy.wait(tiempo)
    cy.get("[name='city']").clear().should("be.visible").type(city)
    cy.wait(tiempo)
    cy.get("[name='state']").should("be.visible").select("Alabama")
    cy.wait(tiempo)
    cy.get("[name='zip']").clear().should("be.visible").type(zcode)
    cy.wait(tiempo)
    cy.get("[name='website']").clear().should("be.visible").type(pag)
    cy.wait(tiempo)
    cy.get(':nth-child(1) > label > input').check()
    //cy.get("[name='hosting']").should("be.visible").check()
    cy.wait(tiempo)
    cy.get("[name='comment']").clear().should("be.visible").type(comment)
    cy.wait(tiempo)

    //cy.get("[type='submit']").should("be.visible").click({force:true})
    //cy.wait(tiempo)

    
} )