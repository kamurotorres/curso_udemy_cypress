/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('cargar por fixture', () => { 
    let tiempo=1000
    //before(() => {
        //cy.fixture('datos2').then(function(data){
            //this.data = data;
            //globalThis.data = data
        //})
    //})

    //uso del alias se debe agregar todo dentro de una promesa 
    //before(() => {
        //cy.fixture('datos2').as("datos_json")
    //})

    //cargar multiples valores
    before(() => {
        cy.fixture('datos2').as("datos_json")
    })


    it('test uno cargando desde json', () => {
        // cy.visit('https://demoqa.com/text-box') 
        // cy.title().should('eq','ToolsQA')
        // cy.wait(tiempo)


        cy.fixture("datos2").then((tesdata) => {
            tesdata.forEach(data => {
                
                const d_nombre = data.nombre
                const d_email = data.email
                const d_dir1 = data.dir1
                const d_dir2 = data.dir2

                cy.visit('https://demoqa.com/text-box') 
                cy.title().should('eq','ToolsQA')
                cy.wait(tiempo)

                cy.Texto_visible('#userName',d_nombre,tiempo)
                cy.Texto_visible('#userEmail',d_email,tiempo)
                cy.Texto_visible('#currentAddress',d_dir1,tiempo)
                cy.Texto_visible('#permanentAddress',d_dir2,tiempo)
                cy.Click_force('#submit',tiempo)
            })
        })

        // cy.get("@datos_json").then((data)=>{
        //     cy.Texto_visible('#userName',data.nombre,tiempo)
        //     cy.Texto_visible('#userEmail',data.email,tiempo)
        //     cy.Texto_visible('#currentAddress',data.dir1,tiempo)
        //     cy.Texto_visible('#permanentAddress',data.dir2,tiempo)
        //     cy.Click_force('#submit',tiempo)
        // })

        

    })
    
});